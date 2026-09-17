import type { NextConfig } from "next";
import { IMAGE_WIDTHS, IMAGE_SIZES } from "./lib/image-config.mjs";

// Deployable at a domain root (Vercel/Netlify/Cloudflare Pages) or under a
// subfolder (e.g. a cPanel subdirectory) by setting NEXT_PUBLIC_BASE_PATH at
// build time. The NEXT_PUBLIC_ prefix makes Next inline it into client code
// too, so lib/utils.ts's assetUrl() helper can read the same value.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: IMAGE_WIDTHS,
    imageSizes: IMAGE_SIZES,
  },
};

export default nextConfig;
