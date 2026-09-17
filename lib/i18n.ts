export const LOCALES = ["en", "mk", "sq"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  mk: "MK",
  sq: "SQ",
};

/** Root-relative path prefix for a locale — English is unprefixed (lives at "/"). */
export function localePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}/`;
}
