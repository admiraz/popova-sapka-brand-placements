"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Toggles the header's shadow once the page has scrolled past 40px. A plain
 * passive scroll listener is enough for this — no GSAP/ScrollTrigger
 * instance needed for a single boolean threshold.
 */
export function HeaderShadowWrapper({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 h-[76px] border-b border-line bg-white transition-shadow duration-200",
        scrolled && "shadow-[0_8px_24px_-16px_rgb(14_39_72_/_0.35)]",
      )}
    >
      {children}
    </header>
  );
}
