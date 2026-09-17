// Prebuild step: generates responsive WebP variants + blur placeholders for
// every source image in public/assets/, and writes the manifest that
// lib/image-loader.ts reads at runtime. Hash-aware — a source file whose
// content hasn't changed since the last run is skipped entirely, so repeat
// builds only pay for what actually changed.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_WIDTHS, OPTIMIZED_DIR, MANIFEST_PATH, BLUR_WIDTH, WEBP_QUALITY } from "../lib/image-config.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const ASSETS_DIR = path.join(ROOT, "public", "assets");
const OUTPUT_DIR = path.join(ROOT, "public", OPTIMIZED_DIR);
const MANIFEST_FILE = path.join(ROOT, MANIFEST_PATH);
const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function loadExistingManifest() {
  try {
    const raw = await readFile(MANIFEST_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function hashBuffer(buffer) {
  return createHash("sha1").update(buffer).digest("hex");
}

function slugify(filename) {
  return filename.replace(/\.[^./]+$/, "");
}

async function processImage(file, buffer, existingEntry) {
  const isPng = path.extname(file).toLowerCase() === ".png";
  const slug = slugify(file);
  const image = sharp(buffer, { animated: false });
  const meta = await image.metadata();
  const nativeWidth = meta.width ?? Math.max(...IMAGE_WIDTHS);

  const widths = [...new Set(IMAGE_WIDTHS.filter((w) => w <= nativeWidth))];
  if (widths.length === 0) widths.push(nativeWidth);
  if (!widths.includes(nativeWidth) && nativeWidth < IMAGE_WIDTHS[0]) {
    widths.push(nativeWidth);
  }

  await Promise.all(
    widths.map(async (width) => {
      const outFile = path.join(OUTPUT_DIR, `${slug}-${width}.webp`);
      const pipeline = sharp(buffer).resize({ width, withoutEnlargement: true });
      const webp = isPng
        ? pipeline.webp({ lossless: true })
        : pipeline.webp({ quality: WEBP_QUALITY });
      await webp.toFile(outFile);
    }),
  );

  const blurBuffer = await sharp(buffer)
    .resize({ width: BLUR_WIDTH })
    .webp({ quality: 40 })
    .toBuffer();

  return {
    hash: existingEntry?.hash,
    widths,
    blurDataURL: `data:image/webp;base64,${blurBuffer.toString("base64")}`,
    width: nativeWidth,
    height: meta.height ?? null,
  };
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const existingManifest = await loadExistingManifest();
  const dirEntries = await readdir(ASSETS_DIR, { withFileTypes: true });
  const sourceFiles = dirEntries
    .filter((entry) => entry.isFile() && SOURCE_EXT.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort();

  const manifest = {};
  let generated = 0;
  let skipped = 0;

  for (const file of sourceFiles) {
    const filePath = path.join(ASSETS_DIR, file);
    const buffer = await readFile(filePath);
    const hash = hashBuffer(buffer);
    const key = `/assets/${file}`;
    const existingEntry = existingManifest[key];

    if (existingEntry && existingEntry.hash === hash) {
      manifest[key] = existingEntry;
      skipped += 1;
      continue;
    }

    const result = await processImage(file, buffer, { hash });
    manifest[key] = { ...result, hash };
    generated += 1;
  }

  await writeFile(MANIFEST_FILE, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.log(
    `optimize-images: ${generated} source image(s) processed, ${skipped} unchanged and skipped, manifest written to ${path.relative(ROOT, MANIFEST_FILE)}`,
  );
}

const stats = await stat(ASSETS_DIR).catch(() => null);
if (!stats) {
  console.warn(`optimize-images: ${ASSETS_DIR} does not exist, skipping.`);
} else {
  await main();
}
