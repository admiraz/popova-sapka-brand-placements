/**
 * Centralized motion constants. Every GSAP timeline in the app reads its
 * easing, duration and stagger values from here — no inline magic numbers
 * in section/component code, so the whole page reads as one orchestrated
 * motion system rather than scattered effects.
 */
export const EASE = {
  out: "power2.out",
  inOut: "power2.inOut",
  hero: "power3.out",
} as const;

export const DURATION = {
  fast: 0.4,
  base: 0.6,
  slow: 0.9,
  hero: 0.9,
} as const;

export const STAGGER = {
  tight: 0.07,
  base: 0.1,
  loose: 0.15,
} as const;

/** Rise distance (px) for scroll-triggered section reveals. */
export const REVEAL_Y = 24;
/** Rise distance (px) for the hero's staggered entrance. */
export const HERO_RISE = 16;
/** Fires a reveal once roughly 15% of the target has entered the viewport. */
export const SCROLL_TRIGGER_START = "top 85%";
