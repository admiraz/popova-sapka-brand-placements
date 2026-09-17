import { SITE } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { ResortImage } from "@/components/ui/ResortImage";
import { HeaderShadowWrapper } from "./HeaderShadowWrapper";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

const BACK_TO_TOP_LABEL: Record<Locale, string> = {
  en: "back to top",
  mk: "назад кон почеток",
  sq: "kthehu në krye",
};

export function Header({ locale }: { locale: Locale }) {
  const site = SITE[locale];

  return (
    <HeaderShadowWrapper>
      <div className="container flex h-full items-center justify-between gap-6">
        <a href="#top" aria-label={`${site.resortDisplayName} — ${BACK_TO_TOP_LABEL[locale]}`} className="shrink-0">
          <ResortImage
            src="/assets/logo-navy.png"
            alt={`${site.resortName} logo`}
            width={195}
            height={44}
            sizes="195px"
            className="h-11 w-auto"
          />
        </a>

        <div className="flex items-center gap-5">
          <LanguageSwitcher locale={locale} className="hidden lg:flex" />
          <MobileNav locale={locale} />
        </div>
      </div>
    </HeaderShadowWrapper>
  );
}
