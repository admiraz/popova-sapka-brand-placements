import { PLACEMENTS, PLACEMENTS_TOTAL, type PlacementBlock } from "@/data/placements";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { PlacementBadge } from "@/components/ui/PlacementBadge";
import { ResortImage } from "@/components/ui/ResortImage";
import { RevealSection } from "@/components/ui/RevealSection";

function PlacementImages({ block }: { block: PlacementBlock }) {
  const [primary, ...rest] = block.images;
  if (!primary) return null;

  return (
    <div className="min-w-0 flex-1 lg:flex-[1.4]" data-reveal="">
      <ImageFrame badge={<PlacementBadge current={block.id} total={PLACEMENTS_TOTAL} />}>
        <ResortImage
          src={primary.src}
          alt={primary.alt}
          width={primary.width}
          height={primary.height}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="h-auto w-full"
        />
      </ImageFrame>

      {rest.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {rest.map((image) => (
            <ImageFrame key={image.src}>
              <ResortImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 29vw, 50vw"
                className="h-auto w-full"
              />
            </ImageFrame>
          ))}
        </div>
      )}
    </div>
  );
}

function PlacementText({ block }: { block: PlacementBlock }) {
  return (
    <div className="min-w-0 flex-1" data-reveal="">
      <SectionEyebrow number={block.eyebrowNumber} label={block.eyebrowLabel} className="mb-5" />
      <h3 className="text-h2 font-display font-black leading-[1.12]">
        <span className="text-navy">{block.titleLine1}</span>
        <br />
        <span className="text-cyan-darker">{block.titleLine2}</span>
      </h3>
      <p className="text-body-lg mt-4 max-w-[46ch] font-body font-light text-text">{block.description}</p>

      {block.bullets.length > 0 && (
        <ul className="mt-6 divide-y divide-line border-t border-line">
          {block.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 py-3.5">
              <span aria-hidden="true" className="h-1 w-7 shrink-0 bg-cyan" />
              <span className="text-[0.9375rem] font-medium text-text">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const SR_HEADING: Record<Locale, string> = {
  en: "The five placements",
  mk: "Петте рекламни простори",
  sq: "Pesë vendosjet",
};

export function Placements({ locale }: { locale: Locale }) {
  return (
    <section id="placements" aria-labelledby="placements-heading" className="bg-white py-section">
      <h2 id="placements-heading" className="sr-only">
        {SR_HEADING[locale]}
      </h2>

      <div className="container flex flex-col gap-16 lg:gap-24">
        {PLACEMENTS[locale].map((block) => (
          <RevealSection
            as="div"
            key={block.id}
            className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-12"
          >
            <PlacementImages block={block} />
            <PlacementText block={block} />
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
