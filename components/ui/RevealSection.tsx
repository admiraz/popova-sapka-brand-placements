"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

type RevealSectionProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

/**
 * Thin client boundary that owns nothing but the scroll-reveal ref/effect.
 * Section components stay server components and pass their (server-
 * rendered) markup through as children — only this wrapper's own small
 * effect ships as client JS, not the content it wraps.
 */
export function RevealSection<T extends ElementType = "div">({
  as,
  children,
  ...props
}: RevealSectionProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useScrollReveal<HTMLElement>();

  return (
    <Tag ref={ref} {...props}>
      {children}
    </Tag>
  );
}
