import { cn } from "@/lib/utils";

export interface DiagonalStreaksProps {
  className?: string;
}

/** Two long thin cyan diagonal streaks crossing a dark section at ~20°. */
export function DiagonalStreaks({ className }: DiagonalStreaksProps) {
  return (
    <div
      aria-hidden="true"
      data-decorative=""
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <span className="absolute left-[18%] top-[-25%] h-[170%] w-px rotate-[20deg] bg-gradient-to-b from-transparent via-cyan/50 to-transparent" />
      <span className="absolute left-[58%] top-[-25%] h-[170%] w-px rotate-[20deg] bg-gradient-to-b from-transparent via-cyan/25 to-transparent" />
    </div>
  );
}
