import { HERO, HERO_CTA_ANCHORS, HERO_IMAGE, HERO_IMAGE_ALT } from "@/data/hero";
import { SITE } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { ResortImage } from "@/components/ui/ResortImage";
import { HeroMotion } from "./HeroMotion";
import styles from "./Hero.module.css";

export function Hero({ locale }: { locale: Locale }) {
  const t = HERO[locale];

  return (
    <section aria-labelledby="hero-heading" className={`relative isolate overflow-hidden ${styles.hero}`}>
      <div className="absolute inset-0" data-hero-image="">
        <ResortImage
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE_ALT[locale]}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark scrim so the light text stays readable over the photo at
            every width — strongest behind the text column, easing off
            toward the right so the image still reads on wide screens. */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/65 to-navy-deep/30" />
      </div>

      <HeroMotion className="relative flex flex-col justify-center gap-6 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40 xl:px-20">
        <span
          aria-hidden="true"
          data-hero-stagger=""
          className="self-end font-script text-6xl text-amber sm:text-7xl"
        >
          {t.scriptWord}
        </span>

        <div className="flex items-center gap-3" data-hero-stagger="">
          <span aria-hidden="true" className="h-1 w-7 shrink-0 bg-cyan" />
          <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-cyan">
            {t.eyebrow}
          </span>
        </div>

        {/* Sized up from the shared --fs-h1/--fs-body-lg tokens (this full-
            bleed hero now spans the whole viewport, not half of it, so the
            text needs more scale to hold its own against the photo). Scoped
            here with arbitrary values rather than bumping the shared tokens,
            since text-h1 and text-body-lg are still used at their normal
            scale elsewhere. */}
        <h1
          id="hero-heading"
          data-hero-stagger=""
          className="text-[clamp(2.75rem,1.75rem+4.2vw,6.5rem)] font-display font-black leading-[1.05]"
        >
          <span className="block text-white">{t.headingLine1}</span>
          <span className="block text-cyan">{t.headingLine2}</span>
        </h1>

        <p
          data-hero-stagger=""
          className="max-w-[48ch] text-[clamp(1.125rem,1.02rem+0.5vw,1.5rem)] font-body font-light text-white/85"
        >
          {t.sub}
        </p>

        <div data-hero-stagger="" className="flex flex-wrap items-center gap-4 pt-2">
          <Button href={HERO_CTA_ANCHORS.primary.href} variant="primary" data-cta={HERO_CTA_ANCHORS.primary.cta}>
            {t.primaryCtaLabel}
          </Button>
          <Button
            href={HERO_CTA_ANCHORS.secondary.href}
            variant="secondary"
            className="text-white hover:text-cyan-light"
            data-cta={HERO_CTA_ANCHORS.secondary.cta}
          >
            {t.secondaryCtaLabel}
          </Button>
        </div>

        <p data-hero-stagger="" className="pt-4 text-small font-body uppercase tracking-[0.1em] text-white/60">
          {SITE[locale].footline}
        </p>
      </HeroMotion>
    </section>
  );
}
