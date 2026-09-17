import { NEXT_STEPS } from "@/data/next-steps";
import { CONTACT } from "@/data/contact";
import { SITE_SHARED } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { DiagonalStreaks } from "@/components/decorative/DiagonalStreaks";
import { RevealSection } from "@/components/ui/RevealSection";

export function Contact({ locale }: { locale: Locale }) {
  const t = CONTACT[locale];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-navy-deep py-section text-white"
    >
      <DiagonalStreaks />

      <RevealSection as="div" className="container relative">
        <SectionEyebrow label={t.eyebrowLabel} tone="on-dark" className="mb-5" data-reveal="" />
        <h2 id="contact-heading" data-reveal="" className="text-h2 max-w-3xl font-display font-black leading-[1.12] text-white">
          {t.headingLine1}
          <br />
          {t.headingLine2}
        </h2>

        <ol className="mt-12 grid gap-5 sm:grid-cols-3 lg:mt-16">
          {NEXT_STEPS[locale].map((step) => (
            <li
              key={step.number}
              data-reveal=""
              data-reveal-group="next-steps"
              className="rounded-card-lg bg-navy-panel p-7"
            >
              <span className="font-display text-sm font-black text-cyan">{step.number}</span>
              <p className="mt-3 font-display text-lg font-bold text-white">{step.title}</p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/65">{step.detail}</p>
            </li>
          ))}
        </ol>

        <div data-reveal="" className="mt-16 max-w-2xl lg:mt-20">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-cyan">{t.partnerLabel}</p>
          <p className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">{t.ctaParagraph}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href={`tel:${SITE_SHARED.contactPhoneHref}`}
              variant="primary"
              data-cta="call-phone"
            >
              {SITE_SHARED.contactPhoneDisplay}
            </Button>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
