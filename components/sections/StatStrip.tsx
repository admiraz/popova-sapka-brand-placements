import { STATS } from "@/data/stats";
import type { Locale } from "@/lib/i18n";
import { StatCard } from "@/components/ui/StatCard";
import { RevealSection } from "@/components/ui/RevealSection";

const ARIA_LABEL: Record<Locale, string> = {
  en: "Resort statistics",
  mk: "Статистика на центарот",
  sq: "Statistikat e qendrës",
};

/**
 * Pulled up to overlap the hero by ~60px from the sm breakpoint up; the
 * overlap is dropped entirely below 640px so it never collides with the
 * hero's own bottom padding (see Hero.module.css).
 */
export function StatStrip({ locale }: { locale: Locale }) {
  return (
    <section aria-label={ARIA_LABEL[locale]} className="container relative z-10 sm:-mt-16 lg:-mt-[70px]">
      <RevealSection
        as="div"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"
      >
        {STATS[locale].map((stat) => (
          <StatCard
            key={stat.id}
            id={stat.id}
            icon={stat.icon}
            title={stat.title}
            detail={stat.detail}
            reveal
            revealGroup="stat-strip"
          />
        ))}
      </RevealSection>
    </section>
  );
}
