import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-cyan-dark px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
