import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { StructuredData } from "@/components/StructuredData";
import { SkipLink } from "./SkipLink";
import { Header } from "./Header";
import { Footer } from "./Footer";
import SmoothScrollProvider from "./SmoothScrollProvider";

/**
 * Shared chrome for every locale route: JSON-LD, skip link, header, main
 * landmark, footer, and the Lenis/GSAP provider. Each per-locale root
 * layout renders this instead of repeating the wiring three times.
 */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <body id="top">
      <StructuredData locale={locale} />
      <SmoothScrollProvider>
        <SkipLink locale={locale} />
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </SmoothScrollProvider>
    </body>
  );
}
