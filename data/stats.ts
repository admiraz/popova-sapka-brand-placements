import type { Locale } from "@/lib/i18n";

export interface Stat {
  id: string;
  icon: "sun" | "snowflake" | "clock" | "mountain";
  title: string;
  detail: string;
}

export const STATS: Record<Locale, Stat[]> = {
  en: [
    { id: "01", icon: "sun", title: "100–150k", detail: "Resort visits in a normal winter season" },
    { id: "02", icon: "snowflake", title: "5–8k", detail: "Visitors on a strong peak weekend day" },
    { id: "03", icon: "clock", title: "4–6 hrs", detail: "Average time a guest spends on the mountain" },
    { id: "04", icon: "mountain", title: "≈150", detail: "Sunny days a season — reliable visibility" },
  ],
  mk: [
    { id: "01", icon: "sun", title: "100–150к", detail: "Посети на центарот во нормална зимска сезона" },
    { id: "02", icon: "snowflake", title: "5–8к", detail: "Посетители во силен викенд на врвот на сезоната" },
    { id: "03", icon: "clock", title: "4–6 часа", detail: "Просечно време што гостинот го поминува на планината" },
    { id: "04", icon: "mountain", title: "≈150", detail: "Сончеви денови во сезоната — сигурна видливост" },
  ],
  sq: [
    { id: "01", icon: "sun", title: "100–150 mijë", detail: "Vizita në qendër gjatë një sezoni normal dimëror" },
    { id: "02", icon: "snowflake", title: "5–8 mijë", detail: "Vizitorë në një ditë të fortë fundjave në kulm të sezonit" },
    { id: "03", icon: "clock", title: "4–6 orë", detail: "Koha mesatare që një mysafir kalon në mal" },
    { id: "04", icon: "mountain", title: "≈150", detail: "Ditë me diell në sezon — dukshmëri e sigurt" },
  ],
};
