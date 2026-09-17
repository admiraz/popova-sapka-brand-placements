import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Registers GSAP plugins exactly once, and only in the browser. Safe to
 * call from every client component that needs ScrollTrigger — repeat calls
 * are a no-op. */
export function ensureGsapRegistered(): void {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
