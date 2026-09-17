// Single source of truth for the static-export image pipeline, shared between
// next.config.ts, scripts/optimize-images.mjs and lib/image-loader.ts.
// Plain .mjs (no TS syntax) so the Node build script can import it directly.

export const IMAGE_WIDTHS = [400, 640, 828, 1080, 1280, 1600, 1920];
export const IMAGE_SIZES = [400, 640];
export const OPTIMIZED_DIR = "assets/optimized";
export const MANIFEST_PATH = "public/assets/optimized/manifest.json";
export const BLUR_WIDTH = 24;
export const WEBP_QUALITY = 82;
