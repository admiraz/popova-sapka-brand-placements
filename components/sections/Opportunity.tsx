import { OPPORTUNITY } from "@/data/opportunity";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { GhostNumeral } from "@/components/decorative/GhostNumeral";
import { RevealSection } from "@/components/ui/RevealSection";

const EYEBROW_LABEL: Record<Locale, string> = {
  en: "THE OPPORTUNITY",
  mk: "МОЖНОСТА",
  sq: "MUNDËSIA",
};

export function Opportunity({ locale }: { locale: Locale }) {
  const t = OPPORTUNITY[locale];

  return (
    <section
      id="opportunity"
      aria-labelledby="opportunity-heading"
      className="section-ice relative bg-ice py-section-sm"
    >
      <RevealSection as="div" className="container">
        <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <GhostNumeral value="01" className="-right-2 -top-10 hidden sm:block" />
            <SectionEyebrow number="01" label={EYEBROW_LABEL[locale]} className="mb-5" data-reveal="" />
            <h2 id="opportunity-heading" data-reveal="" className="text-h2 font-display font-black leading-[1.12]">
              <span className="text-navy">{t.headingLine1}</span>
              <br />
              <span className="text-cyan-darker">{t.headingLine2}</span>
            </h2>
          </div>

          <p data-reveal="" className="text-body-lg self-center font-body font-light text-text lg:max-w-[42ch]">
            {t.lead}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:mt-16">
          {t.cards.map((card) => (
            <div
              key={card.id}
              data-reveal=""
              data-reveal-group="opportunity-cards"
              className="rounded-card-lg bg-card p-7"
            >
              <span className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="h-1 w-7 shrink-0 bg-cyan" />
                <span className="font-display text-xs font-bold text-cyan-darker">{card.id}</span>
              </span>
              <h3 className="text-h3 font-display font-extrabold text-navy">{card.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{card.detail}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
