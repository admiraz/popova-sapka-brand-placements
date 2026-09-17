export interface PlacementBadgeProps {
  current: string;
  total: number;
}

/** Small navy pill, absolutely positioned top-left inside an ImageFrame. */
export function PlacementBadge({ current, total }: PlacementBadgeProps) {
  return (
    <span className="absolute left-4 top-4 z-10 rounded-full bg-navy px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
      Placement {current} / {String(total).padStart(2, "0")}
    </span>
  );
}
