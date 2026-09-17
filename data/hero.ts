import type { Locale } from "@/lib/i18n";

export const HERO_IMAGE = {
  src: "/assets/01-hero-ridge.jpg",
  width: 1920,
  height: 1080,
};

export const HERO_IMAGE_ALT: Record<Locale, string> = {
  en: "Skiers descending a sunlit groomed piste above Popova Šapka's base village, with the Šar Mountains ridge stretching to the horizon.",
  mk: "Скијачи што се спуштаат по осончана уредена патека над основното село на Попова Шапка, со гребенот на Шар Планина што се протега до хоризонтот.",
  sq: "Skiatorë duke zbritur në një pistë të rregulluar e të ndriçuar nga dielli mbi fshatin bazë të Popova Shapkës, me kreshtën e Maleve Shar që shtrihet drejt horizontit.",
};

interface HeroCopy {
  scriptWord: string;
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  sub: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export const HERO: Record<Locale, HeroCopy> = {
  en: {
    scriptWord: "advertise",
    eyebrow: "PARTNERSHIP PROSPECTUS",
    headingLine1: "On-mountain",
    headingLine2: "brand placements",
    sub: "High-impact billboards on the pistes and branding across the lifts of Popova Šapka.",
    primaryCtaLabel: "See the placements",
    secondaryCtaLabel: "Request a proposal",
  },
  mk: {
    scriptWord: "рекламирај",
    eyebrow: "ПАРТНЕРСКА ПОНУДА",
    headingLine1: "На планината",
    headingLine2: "рекламни простори",
    sub: "Рекламни билборди со голем ефект на скијачките патеки и брендирање на жичарниците на Попова Шапка.",
    primaryCtaLabel: "Погледнете ги просторите",
    secondaryCtaLabel: "Побарајте понуда",
  },
  sq: {
    scriptWord: "reklamo",
    eyebrow: "PROSPEKT PARTNERITETI",
    headingLine1: "Në mal",
    headingLine2: "hapësira reklamuese",
    sub: "Billborde me ndikim të lartë në pistat e skijimit dhe brendim i teleferikëve në Popova Shapka.",
    primaryCtaLabel: "Shiko hapësirat",
    secondaryCtaLabel: "Kërko një propozim",
  },
};

export const HERO_CTA_ANCHORS = {
  primary: { href: "#placements", cta: "see-placements" },
  secondary: { href: "#contact", cta: "request-proposal" },
} as const;
