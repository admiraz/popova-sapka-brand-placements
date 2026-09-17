import { getLanguageLinks } from "@/data/navigation";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

const ARIA_LABEL: Record<Locale, string> = {
  en: "Language",
  mk: "Јазик",
  sq: "Gjuha",
};

/**
 * Switches between this site's own EN/MK/SQ routes. Plain same-site links,
 * not an action menu, so this stays a server component with no client JS.
 */
export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const links = getLanguageLinks(locale);

  return (
    <nav aria-label={ARIA_LABEL[locale]} className={cn("flex items-center gap-1 text-sm", className)}>
      {links.map((lang, index) => (
        <span key={lang.hrefLang} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="mx-1 text-line">
              ·
            </span>
          )}
          <a
            href={lang.href}
            hrefLang={lang.hrefLang}
            aria-current={lang.current ? "page" : undefined}
            className={cn(
              "font-display text-xs font-bold uppercase tracking-wide transition-colors",
              lang.current ? "text-navy" : "text-muted hover:text-cyan-dark",
            )}
          >
            {lang.label}
          </a>
        </span>
      ))}
    </nav>
  );
}
