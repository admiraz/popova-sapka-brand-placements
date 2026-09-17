import { LOCALES, localePath, LOCALE_LABELS, type Locale } from "@/lib/i18n";
import { assetUrl } from "@/lib/utils";

export interface LanguageLink {
  label: string;
  href: string;
  current: boolean;
  hrefLang: Locale;
}

/**
 * Switches between this site's own EN/MK/SQ routes (not the resort's
 * external site). These render as plain `<a>` tags (see LanguageSwitcher),
 * not next/link, because navigating between the three locale route groups
 * crosses a root-layout boundary and always does a full page load — so
 * basePath isn't auto-prepended by Next here and has to be applied by hand.
 */
export function getLanguageLinks(currentLocale: Locale): LanguageLink[] {
  return LOCALES.map((locale) => ({
    label: LOCALE_LABELS[locale],
    href: assetUrl(localePath(locale)),
    current: locale === currentLocale,
    hrefLang: locale,
  }));
}
