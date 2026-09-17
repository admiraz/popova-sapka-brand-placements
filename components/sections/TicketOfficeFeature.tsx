import { TICKET_OFFICE, TICKET_OFFICE_IMAGE } from "@/data/ticket-office";
import { PLACEMENTS_TOTAL } from "@/data/placements";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { PlacementBadge } from "@/components/ui/PlacementBadge";
import { ResortImage } from "@/components/ui/ResortImage";
import { RevealSection } from "@/components/ui/RevealSection";
import { cn } from "@/lib/utils";

/**
 * The 5th placement, split out of the standard Placements grid into its own
 * full-width dark feature — one sponsor's single strongest showcase, not
 * another alternating card.
 */
export function TicketOfficeFeature({ locale }: { locale: Locale }) {
  const t = TICKET_OFFICE[locale];

  return (
    <section
      id="ticket-office"
      aria-labelledby="ticket-office-heading"
      className="bg-navy-deep py-section text-white"
    >
      <RevealSection as="div" className="container">
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-14">
          <div className="min-w-0 flex-1 lg:flex-[1.5]" data-reveal="">
            <ImageFrame badge={<PlacementBadge current={t.placementId} total={PLACEMENTS_TOTAL} />}>
              <ResortImage
                src={TICKET_OFFICE_IMAGE.src}
                alt={t.imageAlt}
                width={TICKET_OFFICE_IMAGE.width}
                height={TICKET_OFFICE_IMAGE.height}
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="h-auto w-full"
              />
            </ImageFrame>
          </div>

          <div className="min-w-0 flex-1" data-reveal="">
            <SectionEyebrow number={t.eyebrowNumber} label={t.eyebrowLabel} tone="on-dark" className="mb-5" />
            <h2 id="ticket-office-heading" className="text-h2 font-display font-black leading-[1.12]">
              <span className="text-white">{t.titleLine1}</span>
              <br />
              <span className="text-cyan">{t.titleLine2}</span>
            </h2>
            <p className="text-body-lg mt-4 max-w-[46ch] font-body font-light text-white/80">{t.description}</p>

            {/* 3 columns (not 5) so each tile stays wide enough for its label
                to wrap cleanly — at 5-up the narrower tiles broke words like
                "Base-area" across three cramped lines. The last (widest)
                tile spans the remaining 2 columns on every row width, which
                divides 5 tiles evenly into a 3-then-2 layout. */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {t.stats.map((tile, index) => {
                const isLast = index === t.stats.length - 1;
                return (
                  <div
                    key={tile.label}
                    className={cn(
                      "rounded-card-sm p-4",
                      tile.filled ? "bg-cyan-dark text-white" : "bg-navy-panel text-white",
                      isLast && "col-span-2",
                    )}
                  >
                    <p className="font-display text-2xl font-black">{tile.value}</p>
                    <p className={cn("mt-1 text-xs leading-snug", tile.filled ? "text-white" : "text-white/60")}>
                      {tile.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
