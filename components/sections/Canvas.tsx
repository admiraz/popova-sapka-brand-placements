import { GALLERY } from "@/data/gallery";
import type { Locale } from "@/lib/i18n";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ResortImage } from "@/components/ui/ResortImage";
import { GhostScript } from "@/components/decorative/GhostScript";
import { RevealSection } from "@/components/ui/RevealSection";
import { assetUrl } from "@/lib/utils";
import styles from "./Canvas.module.css";

export function Canvas({ locale }: { locale: Locale }) {
  const t = GALLERY[locale];

  return (
    <section id="canvas" aria-labelledby="canvas-heading" className="relative overflow-hidden bg-navy py-section text-white">
      <GhostScript src={assetUrl("/assets/decorative/ghost-sunny.png")} className="-right-4 top-10 hidden lg:block" />

      <RevealSection as="div" className="container relative">
        <SectionEyebrow number="12" label={t.eyebrowLabel} tone="on-dark" className="mb-5" data-reveal="" />
        <h2 id="canvas-heading" data-reveal="" className="text-h2 max-w-2xl font-display font-black leading-[1.12]">
          {t.headingPrefix && <span className="text-white">{t.headingPrefix}</span>}
          <span className="text-cyan">{t.headingAccent}</span>
          <br />
          <span className="text-white">{t.headingSuffix}</span>
        </h2>
        <p data-reveal="" className="text-body-lg mt-5 max-w-[52ch] font-body font-light text-white/80">
          {t.intro}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {t.images.map((image) => (
            <div
              key={image.src}
              data-reveal=""
              data-reveal-group="gallery"
              className={styles.frame}
            >
              <ResortImage
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
