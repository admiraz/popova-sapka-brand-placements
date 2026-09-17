import type { Locale } from "@/lib/i18n";

export interface NextStep {
  number: string;
  title: string;
  detail: string;
}

// Step 1 and 2's detail copy was reworded when the Packages and Map
// sections were removed — it used to name package tiers ("Track, lift,
// full mountain") and point at "the placement map", neither of which
// exist anymore.
export const NEXT_STEPS: Record<Locale, NextStep[]> = {
  en: [
    {
      number: "01",
      title: "Choose the ambition",
      detail: "A single placement, a full lift takeover, or mountain-wide presence for the season.",
    },
    {
      number: "02",
      title: "Select the inventory",
      detail: "Review the placements and secure the strongest locations for your brand.",
    },
    {
      number: "03",
      title: "Confirm the season",
      detail: "Lock category rights, artwork dates and installation schedule.",
    },
  ],
  mk: [
    {
      number: "01",
      title: "Изберете ја амбицијата",
      detail: "Единечен рекламен простор, целосно преземање лифт, или присуство на целата планина во текот на сезоната.",
    },
    {
      number: "02",
      title: "Изберете го инвентарот",
      detail: "Прегледајте ги рекламните простори и обезбедете ги најсилните локации за вашиот бренд.",
    },
    {
      number: "03",
      title: "Потврдете ја сезоната",
      detail: "Заклучете ги правата за категорија, датумите за дизајн и распоредот за монтажа.",
    },
  ],
  sq: [
    {
      number: "01",
      title: "Zgjidhni ambicien",
      detail: "Një vendosje e vetme, marrje e plotë e një teleferiku, ose prani në të gjithë malin gjatë sezonit.",
    },
    {
      number: "02",
      title: "Zgjidhni inventarin",
      detail: "Shqyrtoni vendosjet dhe siguroni lokacionet më të forta për markën tuaj.",
    },
    {
      number: "03",
      title: "Konfirmoni sezonin",
      detail: "Mbyllni të drejtat e kategorisë, datat e materialeve grafike dhe orarin e instalimit.",
    },
  ],
};
