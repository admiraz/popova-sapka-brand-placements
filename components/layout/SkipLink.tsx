import type { Locale } from "@/lib/i18n";

const LABEL: Record<Locale, string> = {
  en: "Skip to main content",
  mk: "Прескокни до главната содржина",
  sq: "Kalo te përmbajtja kryesore",
};

export function SkipLink({ locale }: { locale: Locale }) {
  return (
    <a href="#main" className="sr-only sr-only-focusable">
      {LABEL[locale]}
    </a>
  );
}
