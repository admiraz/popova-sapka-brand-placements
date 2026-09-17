import type { Metadata } from "next";
import { SITE, SITE_URL } from "@/data/site";
import { LOCALES, localePath, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { assetUrl } from "@/lib/utils";

const HERO_OG_ALT: Record<Locale, string> = {
  en: "Skiers descending a sunlit groomed piste above Popova Šapka's base village, with the Šar Mountains ridge stretching to the horizon.",
  mk: "Скијачи што се спуштаат по осончана уредена патека над основното село на Попова Шапка, со гребенот на Шар Планина што се протега до хоризонтот.",
  sq: "Skiatorë duke zbritur në një pistë të rregulluar e të ndriçuar nga dielli mbi fshatin bazë të Popova Shapkës, me kreshtën e Maleve Shar që shtrihet drejt horizontit.",
};

/**
 * Builds locale-correct metadata (title, description, canonical, OG/Twitter,
 * and hreflang alternates pointing at the other two locale routes) — called
 * once per per-locale root layout so the three routes never drift out of
 * sync with each other's alternates.
 */
export function buildMetadata(locale: Locale): Metadata {
  const site = SITE[locale];
  const path = assetUrl(localePath(locale));
  const heroImage = assetUrl("/assets/01-hero-ridge.jpg");

  const languages: Record<string, string> = { "x-default": assetUrl(localePath(DEFAULT_LOCALE)) };
  for (const l of LOCALES) languages[l] = assetUrl(localePath(l));

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: site.title,
      template: `%s | ${site.resortDisplayName}`,
    },
    description: site.description,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.title,
      title: site.title,
      description: site.description,
      locale,
      images: [{ url: heroImage, width: 1920, height: 1080, alt: HERO_OG_ALT[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.description,
      images: [heroImage],
    },
  };
}
