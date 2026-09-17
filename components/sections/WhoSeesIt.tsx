import { AUDIENCE } from "@/data/audience";
import { STATS } from "@/data/stats";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealSection } from "@/components/ui/RevealSection";
import { MountainRidgeSVG } from "@/components/decorative/MountainRidgeSVG";
import { DashedTrailSVG } from "@/components/decorative/DashedTrailSVG";

export function WhoSeesIt({ locale }: { locale: Locale }) {
  const t = AUDIENCE[locale];

  return (
    <section
      id="who-sees-it"
      aria-labelledby="who-sees-it-heading"
      className="relative overflow-hidden bg-navy-deep py-section text-white"
    >
      <div className="absolute inset-0" data-decorative="">
        <MountainRidgeSVG />
        <DashedTrailSVG />
      </div>

      <RevealSection as="div" className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <SectionEyebrow number="02" label={t.eyebrowLabel} tone="on-dark" className="mb-5" data-reveal="" />
            <h2 id="who-sees-it-heading" data-reveal="" className="text-h2 font-display font-black leading-[1.12]">
              <span className="text-white">{t.headingLine1}</span>
              <br />
              <span className="text-cyan">{t.headingLine2}</span>
            </h2>
            <p data-reveal="" className="text-body-lg mt-6 max-w-[56ch] font-body font-light text-white/80">
              {t.intro}
            </p>

            <ul className="mt-10 divide-y divide-white/10 border-t border-white/10">
              {t.rows.map((row) => (
                <li
                  key={row.title}
                  data-reveal=""
                  data-reveal-group="audience-rows"
                  className="flex gap-4 py-5"
                >
                  <span aria-hidden="true" className="mt-2 h-1 w-7 shrink-0 bg-cyan" />
                  <div>
                    <p className="font-display text-lg font-bold text-white">{row.title}</p>
                    <p className="mt-1.5 max-w-[54ch] text-[0.9375rem] leading-relaxed text-white/65">
                      {row.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="" className="rounded-card-lg bg-navy-panel p-7 sm:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-cyan-light">
              {t.seasonInNumbersLabel}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
              {STATS[locale].map((stat) => (
                <div key={stat.id}>
                  <p className="font-display text-3xl font-black text-white">{stat.title}</p>
                  <p className="mt-1 text-xs leading-snug text-white/60">{stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-cyan-light">
                {t.digitalReachLabel}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/70">{t.digitalReachNote}</p>
            </div>

            <p className="mt-6 text-[11px] leading-relaxed text-white/60">{t.planningDisclaimer}</p>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
