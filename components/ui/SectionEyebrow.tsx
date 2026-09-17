import { cn } from "@/lib/utils";

export interface SectionEyebrowProps {
  /** Omit for a label-only eyebrow (e.g. the closing "NEXT STEP"): renders just "LABEL" instead of "0N / LABEL". */
  number?: string;
  label: string;
  className?: string;
  /**
   * "on-light" (default) uses --cyan-darker so the text clears WCAG AA on
   * white/ice/card backgrounds. "on-dark" uses the brighter --cyan, which
   * already passes comfortably against navy/navy-deep/navy-panel.
   */
  tone?: "on-light" | "on-dark";
}

/** Cyan bar + "0N / LABEL" — the eyebrow device repeated at the top of every section. */
export function SectionEyebrow({ number, label, className, tone = "on-light" }: SectionEyebrowProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span aria-hidden="true" className="h-1 w-7 shrink-0 bg-cyan" />
      <span
        className={cn(
          "font-display text-eyebrow font-bold uppercase tracking-[0.18em]",
          tone === "on-dark" ? "text-cyan" : "text-cyan-darker",
        )}
      >
        {number ? `${number} / ${label}` : label}
      </span>
    </div>
  );
}
