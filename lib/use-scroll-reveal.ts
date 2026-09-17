"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap, ensureGsapRegistered } from "@/lib/gsap";
import { DURATION, EASE, REVEAL_Y, SCROLL_TRIGGER_START, STAGGER } from "@/lib/animations";
import { prefersReducedMotion } from "@/lib/reduced-motion";

/**
 * Attach to a section's root element. Any descendant marked `data-reveal`
 * rises 24px and fades in once ~15% of it enters the viewport; descendants
 * that share the same `data-reveal-group` value stagger together as one
 * animation instead of firing independently. Reduced-motion users see
 * content immediately, with no rise/fade at all. Everything created here is
 * scoped to a gsap.context and fully reverted (tweens + ScrollTriggers) on
 * unmount. Descendants marked `data-draw-path` (decorative SVG lines with
 * `pathLength=1`) get a matching stroke-dashoffset draw-in instead.
 */
export function useScrollReveal<T extends HTMLElement>(): RefObject<T | null> {
  const scopeRef = useRef<T | null>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope || prefersReducedMotion()) return;

    ensureGsapRegistered();

    const ctx = gsap.context(() => {
      const groups = new Map<string, HTMLElement[]>();
      const singles: HTMLElement[] = [];

      gsap.utils.toArray<HTMLElement>("[data-reveal]", scope).forEach((el) => {
        const group = el.dataset.revealGroup;
        if (group) {
          const list = groups.get(group) ?? [];
          list.push(el);
          groups.set(group, list);
        } else {
          singles.push(el);
        }
      });

      singles.forEach((el) => {
        gsap.from(el, {
          y: REVEAL_Y,
          autoAlpha: 0,
          duration: DURATION.base,
          ease: EASE.out,
          scrollTrigger: {
            trigger: el,
            start: SCROLL_TRIGGER_START,
            toggleActions: "play none none none",
          },
        });
      });

      groups.forEach((elements) => {
        gsap.from(elements, {
          y: REVEAL_Y,
          autoAlpha: 0,
          duration: DURATION.base,
          ease: EASE.out,
          stagger: STAGGER.base,
          scrollTrigger: {
            trigger: elements[0],
            start: SCROLL_TRIGGER_START,
            toggleActions: "play none none none",
          },
        });
      });

      // Decorative SVG line-draw reveal (mountain ridge paths etc.) — same
      // "roughly 15% into view" trigger, just animating stroke-dashoffset
      // instead of position/opacity. Paths use pathLength=1 so dashoffset
      // always runs a clean 1 -> 0 regardless of actual path geometry.
      const drawPaths = gsap.utils.toArray<SVGPathElement>("[data-draw-path]", scope);
      if (drawPaths.length) {
        gsap.from(drawPaths, {
          strokeDashoffset: 1,
          duration: DURATION.slow,
          ease: EASE.out,
          stagger: STAGGER.base,
          scrollTrigger: {
            trigger: scope,
            start: SCROLL_TRIGGER_START,
            toggleActions: "play none none none",
          },
        });
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  return scopeRef;
}
