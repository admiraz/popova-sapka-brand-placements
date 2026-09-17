import { SITE, SITE_SHARED } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { ResortImage } from "@/components/ui/ResortImage";

const OFFICIAL_SITE_LABEL: Record<Locale, string> = {
  en: "Official resort site → popovashapka.com.mk",
  mk: "Официјална страница на центарот → popovashapka.com.mk",
  sq: "Faqja zyrtare e qendrës → popovashapka.com.mk",
};

export function Footer({ locale }: { locale: Locale }) {
  const site = SITE[locale];

  return (
    <footer className="bg-navy-deep py-14 text-white">
      <div className="container flex flex-col items-center gap-5 text-center">
        <ResortImage
          src="/assets/logo-white.png"
          alt={`${site.resortName} logo`}
          width={177}
          height={40}
          sizes="177px"
          className="h-10 w-auto"
        />
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/70">
          {site.footerTagline}
        </p>
        <a
          href={`${SITE_SHARED.resortDomain}/en/`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-sm font-bold text-cyan-light underline decoration-cyan-light/40 underline-offset-4 transition-colors hover:text-cyan"
        >
          {OFFICIAL_SITE_LABEL[locale]}
        </a>
        <p className="text-xs text-white/50">{site.copyrightLine}</p>
      </div>
    </footer>
  );
}
