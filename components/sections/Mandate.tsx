import { MANDATE } from "@/data/mandate";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealSection } from "@/components/ui/RevealSection";
import { cn } from "@/lib/utils";

export function Mandate({ locale }: { locale: Locale }) {
  const t = MANDATE[locale];

  return (
    <section id="mandate" aria-labelledby="mandate-heading" className="bg-white py-section-sm">
      <RevealSection as="div" className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <SectionEyebrow number="03" label={t.eyebrowLabel} className="mb-5" data-reveal="" />
            <h2 id="mandate-heading" data-reveal="" className="text-h2 font-display font-black leading-[1.12]">
              <span className="text-navy">{t.headingLine1}</span>
              <br />
              <span className="text-cyan-darker">{t.headingLine2}</span>
            </h2>
          </div>
          <p data-reveal="" className="text-body-lg font-body font-light text-text lg:max-w-[42ch]">
            {t.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:mt-16">
          {t.cards.map((card) => (
            <div
              key={card.title}
              data-reveal=""
              data-reveal-group="mandate-cards"
              className={cn(
                "rounded-card-lg p-7 shadow-card",
                card.filled ? "bg-navy text-white" : "bg-white",
              )}
            >
              <p
                className={cn(
                  "font-display text-xs font-bold uppercase tracking-[0.14em]",
                  card.filled ? "text-cyan-light" : "text-cyan-darker",
                )}
              >
                {card.eyebrow}
              </p>
              <h3
                className={cn(
                  "mt-3 text-h3 font-display font-extrabold",
                  card.filled ? "text-white" : "text-navy",
                )}
              >
                {card.title}
              </h3>
              <p
                className={cn(
                  "mt-3 text-[0.9375rem] leading-relaxed",
                  card.filled ? "text-white/75" : "text-muted",
                )}
              >
                {card.detail}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
