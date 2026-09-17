import type { Locale } from "@/lib/i18n";
import { Hero } from "@/components/sections/Hero";
import { StatStrip } from "@/components/sections/StatStrip";
import { Opportunity } from "@/components/sections/Opportunity";
import { WhoSeesIt } from "@/components/sections/WhoSeesIt";
import { Mandate } from "@/components/sections/Mandate";
import { Inventory } from "@/components/sections/Inventory";
import { Placements } from "@/components/sections/Placements";
import { TicketOfficeFeature } from "@/components/sections/TicketOfficeFeature";
import { FormatsCare } from "@/components/sections/FormatsCare";
import { Takeover } from "@/components/sections/Takeover";
import { Canvas } from "@/components/sections/Canvas";
import { Contact } from "@/components/sections/Contact";

/**
 * The entire page, shared across all three locale routes (see
 * app/(en)/page.tsx, app/(mk)/mk/page.tsx, app/(sq)/sq/page.tsx) — every
 * section pulls its own copy from locale-keyed data via this one `locale`
 * prop, so the page is assembled once, not duplicated per language.
 */
export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Hero locale={locale} />
      <StatStrip locale={locale} />
      <Opportunity locale={locale} />
      <WhoSeesIt locale={locale} />
      <Mandate locale={locale} />
      <Inventory locale={locale} />
      <Placements locale={locale} />
      <TicketOfficeFeature locale={locale} />
      <FormatsCare locale={locale} />
      <Takeover locale={locale} />
      <Canvas locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
