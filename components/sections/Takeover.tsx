import { TAKEOVER } from "@/data/takeover";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ResortImage } from "@/components/ui/ResortImage";
import { Pill } from "@/components/ui/Pill";
import { RevealSection } from "@/components/ui/RevealSection";
import { cn } from "@/lib/utils";

export function Takeover({ locale }: { locale: Locale }) {
  const t = TAKEOVER[locale];

  return (
    <section id="takeover" aria-labelledby="takeover-heading" className="bg-navy-deep py-section text-white">
      <RevealSection as="div" className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <SectionEyebrow number="11" label={t.eyebrowLabel} tone="on-dark" className="mb-5" data-reveal="" />
            <h2 id="takeover-heading" data-reveal="" className="text-h2 font-display font-black leading-[1.12]">
              <span className="text-white">{t.headingLine1} </span>
              <span className="text-cyan">{t.headingLine2}</span>
            </h2>
            <p data-reveal="" className="text-body-lg mt-5 max-w-[48ch] font-body font-light text-white/80">
              {t.intro}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {t.stats.map((stat) => (
                <div
                  key={stat.label}
                  data-reveal=""
                  data-reveal-group="takeover-stats"
                  className={cn(
                    "rounded-card-sm p-4",
                    stat.filled ? "bg-cyan-dark text-white" : "bg-navy-panel text-white",
                  )}
                >
                  <p className="font-display text-2xl font-black">{stat.value}</p>
                  <p className={cn("mt-1 text-xs leading-snug", stat.filled ? "text-white" : "text-white/60")}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal="" className="relative min-w-0">
            <Pill className="absolute -top-4 left-4 z-10">{t.badge}</Pill>
            <div className="grid grid-cols-2 gap-4">
              {t.images.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-card-lg">
                  <ResortImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
