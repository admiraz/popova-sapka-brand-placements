import type { Locale } from "@/lib/i18n";

export interface FormatCard {
  id: string;
  title: string;
  detail: string;
  filled?: boolean;
}

interface FormatsCopy {
  eyebrowLabel: string;
  headingLine1: string;
  headingLine2: string;
  cards: FormatCard[];
}

export const FORMATS_CARE: Record<Locale, FormatsCopy> = {
  en: {
    eyebrowLabel: "FORMATS & CARE",
    headingLine1: "Built for",
    headingLine2: "the mountain",
    cards: [
      { id: "01", title: "Standard sizes", detail: "3×2 m, 4×3 m or custom formats." },
      { id: "02", title: "Weatherproof print", detail: "UV- and frost-resistant materials." },
      { id: "03", title: "Snow-load frames", detail: "Engineered to sit safely on the piste." },
      { id: "04", title: "On-brand artwork", detail: "Printed to your brand guidelines." },
      { id: "05", title: "We install", detail: "Placement and mounting handled by us.", filled: true },
      { id: "06", title: "We maintain", detail: "Cleaned and upkept all season long.", filled: true },
    ],
  },
  mk: {
    eyebrowLabel: "ФОРМАТИ И ОДРЖУВАЊЕ",
    headingLine1: "Изработено за",
    headingLine2: "планината",
    cards: [
      { id: "01", title: "Стандардни димензии", detail: "3×2 м, 4×3 м или по нарачка." },
      { id: "02", title: "Печат отпорен на време", detail: "Материјали отпорни на УВ-зраци и мраз." },
      { id: "03", title: "Рамки за оптоварување со снег", detail: "Инженерски изработени за безбедно поставување на патеката." },
      { id: "04", title: "Дизајн според вашиот бренд", detail: "Печатено според вашите брендинг насоки." },
      { id: "05", title: "Ние монтираме", detail: "Поставувањето и монтажата ги извршуваме ние.", filled: true },
      { id: "06", title: "Ние одржуваме", detail: "Чистење и одржување во текот на целата сезона.", filled: true },
    ],
  },
  sq: {
    eyebrowLabel: "FORMATET & MIRËMBAJTJA",
    headingLine1: "Ndërtuar për",
    headingLine2: "malin",
    cards: [
      { id: "01", title: "Përmasa standarde", detail: "3×2 m, 4×3 m ose format të personalizuar." },
      { id: "02", title: "Printim rezistent ndaj motit", detail: "Materiale rezistente ndaj UV-së dhe ngricës." },
      { id: "03", title: "Korniza për ngarkesën e borës", detail: "Të projektuara për t'u vendosur në mënyrë të sigurt në pistë." },
      { id: "04", title: "Grafikë sipas markës suaj", detail: "Të printuara sipas udhëzimeve të markës suaj." },
      { id: "05", title: "Ne instalojmë", detail: "Vendosjen dhe montimin i kryejmë ne.", filled: true },
      { id: "06", title: "Ne mirëmbajmë", detail: "Pastrim dhe mirëmbajtje gjatë gjithë sezonit.", filled: true },
    ],
  },
};
