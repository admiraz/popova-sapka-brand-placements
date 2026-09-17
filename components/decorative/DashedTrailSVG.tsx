import { cn } from "@/lib/utils";

export interface DashedTrailSVGProps {
  className?: string;
}

/** A white dashed path curving between the audience rows on a dark section. */
export function DashedTrailSVG({ className }: DashedTrailSVGProps) {
  return (
    <svg
      viewBox="0 0 120 620"
      fill="none"
      aria-hidden="true"
      data-decorative=""
      preserveAspectRatio="none"
      className={cn("absolute inset-y-0 left-6 h-full w-24", className)}
    >
      <path
        d="M20 0 C 60 60, 10 120, 55 190 S 90 320, 40 380 S 15 480, 65 540 S 40 600, 60 620"
        stroke="white"
        strokeOpacity="0.28"
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
    </svg>
  );
}
