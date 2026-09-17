import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class lists and resolve conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a root-relative path with the configured basePath so the same
 * static export works at a domain root or under a subfolder deployment.
 * next/image and next/link already handle this themselves — use this only
 * for raw string references (OG/meta URLs, JSON-LD, non-Image asset src).
 */
export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
