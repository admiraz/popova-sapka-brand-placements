import { cn } from "@/lib/utils";
import styles from "./GhostNumeral.module.css";

export interface GhostNumeralProps {
  value: string;
  className?: string;
}

/** Huge outlined numeral (stroke only, cyan 25%) behind a section heading. */
export function GhostNumeral({ value, className }: GhostNumeralProps) {
  return (
    <span aria-hidden="true" data-ghost="" className={cn(styles.numeral, className)}>
      {value}
    </span>
  );
}
