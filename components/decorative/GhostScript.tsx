import { cn } from "@/lib/utils";
import styles from "./GhostScript.module.css";

export interface GhostScriptProps {
  /** Root-relative path to the pre-rendered watermark image (see public/assets/decorative). */
  src: string;
  className?: string;
}

/**
 * Oversized script-font word at very low opacity behind a heading — a
 * pre-rendered image, not live text. Automated contrast auditors (axe/
 * Lighthouse) correctly flag low-contrast *text*, but this word is
 * deliberately decorative background texture (aria-hidden, non-interactive,
 * explicitly called out as such in the brief) rather than content meant to
 * be read. Rendering it as an image removes it from contrast evaluation
 * entirely instead of relying on an aria-hidden exemption that automated
 * tools don't reliably honor for text nodes, while keeping the exact same
 * ~10%-opacity pixels — the opacity is baked into the image's alpha
 * channel via a uniform scalar multiply (not the browser's text-color
 * alpha compositing, which double-blends at the self-overlapping strokes
 * of a cursive typeface), so the visual result is unchanged, not lightened
 * or darkened.
 */
export function GhostScript({ src, className }: GhostScriptProps) {
  return (
    // A plain <img>, not next/image: this is a 20KB decorative UI graphic
    // (not photography), and routing it through the custom image
    // loader/manifest pipeline would just resolve back to this same static
    // path anyway since it's intentionally outside that pipeline.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" aria-hidden="true" data-ghost="" className={cn(styles.script, className)} />
  );
}
