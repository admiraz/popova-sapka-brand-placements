import type { Locale } from "@/lib/i18n";

export interface InventoryCategory {
  id: string;
  title: string;
  detail: string;
}

interface InventoryCopy {
  eyebrowLabel: string;
  headingLine1: string;
  headingLine2: string;
  categories: InventoryCategory[];
}

export const INVENTORY: Record<Locale, InventoryCopy> = {
  en: {
    eyebrowLabel: "THE INVENTORY",
    headingLine1: "Everywhere",
    headingLine2: "they look",
    categories: [
      { id: "01", title: "On the tracks", detail: "Piste-side billboards along the runs." },
      { id: "02", title: "On the lifts", detail: "Chairlifts, pylons, cabins & stations." },
      { id: "03", title: "Base & village", detail: "Banners, flags & start/finish gates." },
      { id: "04", title: "Digital & live cam", detail: "Webcam overlays, app & snow report." },
    ],
  },
  mk: {
    eyebrowLabel: "ИНВЕНТАРОТ",
    headingLine1: "Секаде каде",
    headingLine2: "гледаат",
    categories: [
      { id: "01", title: "На патеките", detail: "Билборди покрај скијачките патеки." },
      { id: "02", title: "На лифтовите", detail: "Жичарници, столбови, кабини и станици." },
      { id: "03", title: "База и село", detail: "Транспаренти, знамиња и порти за старт/финиш." },
      { id: "04", title: "Дигитално и веб-камера во живо", detail: "Прекривки на веб-камери, апликација и извештај за снег." },
    ],
  },
  sq: {
    eyebrowLabel: "INVENTARI",
    headingLine1: "Kudo ku",
    headingLine2: "shikojnë",
    categories: [
      { id: "01", title: "Në pista", detail: "Billborde anë pistave përgjatë trasesë." },
      { id: "02", title: "Në teleferikë", detail: "Teleferikë, shtylla, kabina dhe stacione." },
      { id: "03", title: "Baza dhe fshati", detail: "Flamuj, banderola dhe porta start/finish." },
      { id: "04", title: "Dixhital dhe kamera live", detail: "Mbivendosje në kamera live, aplikacion dhe raport bore." },
    ],
  },
};
