import { cn } from "@/lib/utils";

export interface MountainRidgeSVGProps {
  className?: string;
}

/** Hand-drawn-style ridge line, white at 8% opacity, for dark-section backgrounds. */
export function MountainRidgeSVG({ className }: MountainRidgeSVGProps) {
  return (
    <svg
      viewBox="0 0 1440 520"
      fill="none"
      aria-hidden="true"
      data-decorative=""
      preserveAspectRatio="xMidYMax slice"
      className={cn("absolute inset-0 h-full w-full", className)}
    >
      <path
        data-draw-path=""
        pathLength={1}
        d="M-40 420 L120 300 200 350 320 180 420 280 520 140 640 320 760 210 860 300 980 160 1100 310 1220 240 1340 340 1480 260"
        stroke="white"
        strokeOpacity="0.08"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ strokeDasharray: 1 }}
      />
      <path
        data-draw-path=""
        pathLength={1}
        d="M-40 470 L100 400 240 440 360 330 480 410 600 300 720 430 840 350 960 420 1080 320 1200 410 1340 370 1480 430"
        stroke="white"
        strokeOpacity="0.06"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ strokeDasharray: 1 }}
      />
    </svg>
  );
}
