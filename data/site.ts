import type { Locale } from "@/lib/i18n";

/** Locale-independent facts: URLs, contact details, proper names. */
export const SITE_SHARED = {
  resortDomain: "https://popovashapka.com.mk",
  legalName: "BS Suite",
  contactPhoneDisplay: "+389 75 925 675",
  contactPhoneHref: "+38975925675",
} as const;

interface SiteCopy {
  name: string;
  title: string;
  resortName: string;
  resortDisplayName: string;
  description: string;
  footline: string;
  copyrightLine: string;
  footerTagline: string;
}

export const SITE: Record<Locale, SiteCopy> = {
  en: {
    name: "Popova Šapka — On-Mountain Brand Placements",
    title: "On-Mountain Brand Placements | Popova Šapka Partnership Prospectus",
    resortName: "Ski Center Popova Šapka",
    resortDisplayName: "Popova Šapka",
    description:
      "High-impact billboards on the pistes and branding across the lifts of Popova Šapka — on-mountain advertising inventory sold exclusively through BS Suite, the resort's official advertising partner.",
    footline: "KODRA E DIELLIT · THE HILL OF THE SUN · ŠAR MOUNTAINS, NORTH MACEDONIA",
    copyrightLine: "© 2026 BS Suite · Official advertising partner of Ski Center Popova Šapka.",
    footerTagline: "POPOVA ŠAPKA · BRAND PLACEMENTS",
  },
  mk: {
    name: "Попова Шапка — Рекламни простори на планина",
    title: "Рекламни простори на планина | Партнерска понуда за Попова Шапка",
    resortName: "Скијачки центар Попова Шапка",
    resortDisplayName: "Попова Шапка",
    description:
      "Рекламни билборди со голем ефект на скијачките патеки и брендирање на жичарниците на Попова Шапка — рекламен простор на планина што се продава ексклузивно преку BS Suite, официјалниот рекламен партнер на центарот.",
    footline: "KODRA E DIELLIT · РИДОТ НА СОНЦЕТО · ШАР ПЛАНИНА, СЕВЕРНА МАКЕДОНИЈА",
    copyrightLine: "© 2026 BS Suite · Официјален рекламен партнер на Скијачкиот центар Попова Шапка.",
    footerTagline: "ПОПОВА ШАПКА · РЕКЛАМНИ ПРОСТОРИ",
  },
  sq: {
    name: "Popova Shapka — Hapësira Reklamuese në Mal",
    title: "Hapësira Reklamuese në Mal | Prospekti i Partneritetit të Popova Shapka",
    resortName: "Qendra e Skijimit Popova Shapka",
    resortDisplayName: "Popova Shapka",
    description:
      "Billborde me ndikim të lartë në pistat e skijimit dhe brendim i teleferikëve në Popova Shapka — hapësira reklamuese në mal, të shitura ekskluzivisht përmes BS Suite, partnerit zyrtar të reklamimit të qendrës.",
    footline: "KODRA E DIELLIT · MALET SHAR, MAQEDONIA E VERIUT",
    copyrightLine: "© 2026 BS Suite · Partneri zyrtar i reklamimit i Qendrës së Skijimit Popova Shapka.",
    footerTagline: "POPOVA SHAPKA · HAPËSIRA REKLAMUESE",
  },
};

// Replace with the real deployment domain at launch (see README). Falls back
// to a placeholder so metadata/JSON-LD/canonical URLs are always well-formed.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://brand-placements.example.com";
