"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { DURATION, EASE, HERO_RISE, STAGGER } from "@/lib/animations";
import { prefersReducedMotion } from "@/lib/reduced-motion";

/**
 * Runs once on mount (not scroll-triggered): the hero image fades/scales in
 * while the eyebrow, script word, heading, sub and actions — every element
 * marked `data-hero-stagger` inside the scope — rise and fade in staggered
 * sequence right after. Reduced-motion users see the finished hero
 * immediately, no animation at all.
 */
export function useHeroTimeline<T extends HTMLElement>(): RefObject<T | null> {
  const scopeRef = useRef<T | null>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const image = scope.querySelector("[data-hero-image]");
      const staggerTargets = gsap.utils.toArray<HTMLElement>("[data-hero-stagger]", scope);

      const tl = gsap.timeline({ defaults: { ease: EASE.hero } });

      if (image) {
        tl.fromTo(
          image,
          { autoAlpha: 0, scale: 1.04 },
          { autoAlpha: 1, scale: 1, duration: DURATION.hero },
        );
      }

      if (staggerTargets.length) {
        tl.from(
          staggerTargets,
          { y: HERO_RISE, autoAlpha: 0, duration: DURATION.base, stagger: STAGGER.tight },
          image ? "-=0.5" : 0,
        );
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  return scopeRef;
}
