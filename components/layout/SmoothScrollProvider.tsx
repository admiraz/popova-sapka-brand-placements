"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reduced-motion";

/**
 * Owns the single Lenis instance for the page, driven by GSAP's ticker so
 * scroll-linked ScrollTrigger animations stay perfectly in sync with the
 * smooth-scroll position. Rendered once at the root, dynamically imported
 * with `ssr: false` since Lenis/GSAP are browser-only. Disabled entirely
 * under `prefers-reduced-motion: reduce`, in which case the browser's
 * native scrolling is left untouched.
 */
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    ensureGsapRegistered();

    const lenis = new Lenis({ autoRaf: false });
    const onTick = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return children;
}
