import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./ImageFrame.module.css";

export interface ImageFrameProps {
  children: ReactNode;
  badge?: ReactNode;
  className?: string;
}

/** Wraps a ResortImage with a rounded, shadowed frame. */
export function ImageFrame({ children, badge, className }: ImageFrameProps) {
  return (
    <div className={cn(styles.wrap, className)}>
      <div className={styles.imageBox}>
        {badge}
        {children}
      </div>
    </div>
  );
}
