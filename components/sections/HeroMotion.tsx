"use client";

import type { ReactNode } from "react";
import { useHeroTimeline } from "@/lib/use-hero-timeline";

/** Thin client boundary owning only the hero's load-in timeline (see lib/use-hero-timeline.ts). */
export function HeroMotion({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useHeroTimeline<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
