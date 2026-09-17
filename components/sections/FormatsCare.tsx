import { FORMATS_CARE } from "@/data/formats";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GhostNumeral } from "@/components/decorative/GhostNumeral";
import { RevealSection } from "@/components/ui/RevealSection";
import { cn } from "@/lib/utils";

export function FormatsCare({ locale }: { locale: Locale }) {
  const t = FORMATS_CARE[locale];

  return (
    <section id="formats-care" aria-labelledby="formats-care-heading" className="relative bg-white py-section-sm">
      <RevealSection as="div" className="container">
        <div className="relative">
          <GhostNumeral value="10" className="-right-2 -top-10 hidden sm:block" />
          <SectionEyebrow number="10" label={t.eyebrowLabel} className="mb-5" data-reveal="" />
          <h2 id="formats-care-heading" data-reveal="" className="text-h2 max-w-2xl font-display font-black leading-[1.12]">
            <span className="text-navy">{t.headingLine1} </span>
            <span className="text-cyan-darker">{t.headingLine2}</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {t.cards.map((card) => (
            <div
              key={card.id}
              data-reveal=""
              data-reveal-group="formats-cards"
              className={cn(
                "rounded-card-lg p-7",
                card.filled ? "bg-navy text-white" : "bg-card text-text",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "font-display text-xs font-bold",
                  card.filled ? "text-cyan-light" : "text-cyan-darker",
                )}
              >
                {card.id}
              </span>
              <h3 className={cn("mt-3 text-h3 font-display font-extrabold", card.filled ? "text-white" : "text-navy")}>
                {card.title}
              </h3>
              <p className={cn("mt-2 text-[0.9375rem] leading-relaxed", card.filled ? "text-white/75" : "text-muted")}>
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
