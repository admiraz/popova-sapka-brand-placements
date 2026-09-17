import { cn } from "@/lib/utils";
import { STAT_ICONS } from "./stat-icons";
import styles from "./StatCard.module.css";

export interface StatCardProps {
  id: string;
  icon: keyof typeof STAT_ICONS;
  title: string;
  detail: string;
  className?: string;
  /** Opt into the shared scroll-reveal system via data-reveal on this card. */
  reveal?: boolean;
  revealGroup?: string;
}

export function StatCard({ id, icon, title, detail, className, reveal, revealGroup }: StatCardProps) {
  const Icon = STAT_ICONS[icon];

  return (
    <div
      className={cn(styles.card, className)}
      data-reveal={reveal ? "" : undefined}
      data-reveal-group={revealGroup}
    >
      <Icon width={24} height={24} className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <p className={styles.detail}>{detail}</p>
      <span className={styles.ghost} aria-hidden="true" data-ghost="">
        {id}
      </span>
    </div>
  );
}
