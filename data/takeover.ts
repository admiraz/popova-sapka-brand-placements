import type { Locale } from "@/lib/i18n";

export interface TakeoverStat {
  value: string;
  label: string;
  filled?: boolean;
}

export interface TakeoverImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface TakeoverCopy {
  eyebrowLabel: string;
  headingLine1: string;
  headingLine2: string;
  badge: string;
  intro: string;
  stats: TakeoverStat[];
  images: TakeoverImage[];
}

const IMG = {
  chairlift: { src: "/assets/11-takeover-chairlift.jpg", width: 893, height: 1022 },
  station: { src: "/assets/12-takeover-station.jpg", width: 949, height: 1086 },
  baseFence: { src: "/assets/13-takeover-base-fence.jpg", width: 823, height: 941 },
  pylonSlope: { src: "/assets/14-takeover-pylon-slope.jpg", width: 823, height: 941 },
};

export const TAKEOVER: Record<Locale, TakeoverCopy> = {
  en: {
    eyebrowLabel: "EXCLUSIVE TAKEOVER",
    headingLine1: "Take over",
    headingLine2: "the 6-seater",
    badge: "ONE SPONSOR ONLY",
    intro:
      "One sponsor, one entire lift — top to bottom. Every cabin, pylon and building carries your brand alone for the whole season. No shared exposure, no competing logos.",
    stats: [
      { value: "2", label: "Lift stations, base to summit" },
      { value: "66", label: "Branded chair cabins" },
      { value: "11", label: "Lift pylons, base to summit" },
      { value: "60m", label: "Wooden fence, 2m tall" },
      { value: "2", label: "Small base houses" },
      { value: "100%", label: "Exclusively yours", filled: true },
    ],
    images: [
      { ...IMG.chairlift, alt: "Branded chairlift cabins descending the mountain, exclusively wrapped for one sponsor." },
      { ...IMG.station, alt: "A branded chairlift cabin passing close to the lift station, fully wrapped for one sponsor." },
      { ...IMG.baseFence, alt: "Aerial view of the base-area lift stations and boundary fence line." },
      { ...IMG.pylonSlope, alt: "A single branded lift pylon standing along a wide open piste." },
    ],
  },
  mk: {
    eyebrowLabel: "ЕКСКЛУЗИВНО ПРЕЗЕМАЊЕ",
    headingLine1: "Преземете го",
    headingLine2: "шестседот",
    badge: "САМО ЕДЕН СПОНЗОР",
    intro:
      "Еден спонзор, цел лифт — од врв до дно. Секоја кабина, столб и објект го носи само вашиот бренд за целата сезона. Без делена изложеност, без конкурентски логоа.",
    stats: [
      { value: "2", label: "Лифт станици, од база до врв" },
      { value: "66", label: "Брендирани столчиња" },
      { value: "11", label: "Столбови на лифтот, од база до врв" },
      { value: "60м", label: "Дрвена ограда, висока 2м" },
      { value: "2", label: "Мали објекти во базата" },
      { value: "100%", label: "Ексклузивно ваше", filled: true },
    ],
    images: [
      { ...IMG.chairlift, alt: "Брендирани кабини на жичарница што се спуштаат по планината, целосно обложени ексклузивно за еден спонзор." },
      { ...IMG.station, alt: "Брендирана кабина на жичарница минува блиску до станицата на лифтот, целосно обложена за еден спонзор." },
      { ...IMG.baseFence, alt: "Воздушен поглед на станиците на лифтот во базата и оградата на границата." },
      { ...IMG.pylonSlope, alt: "Единечен брендиран столб на лифтот долж широка отворена патека." },
    ],
  },
  sq: {
    eyebrowLabel: "MARRJE EKSKLUZIVE",
    headingLine1: "Merre me qira",
    headingLine2: "6-ndenjësin",
    badge: "VETËM NJË SPONSOR",
    intro:
      "Një sponsor, një teleferik i tërë — nga maja te fundi. Çdo kabinë, shtyllë dhe ndërtesë mbart vetëm markën tuaj gjatë gjithë sezonit. Pa ekspozim të përbashkët, pa logo konkurruese.",
    stats: [
      { value: "2", label: "Stacione teleferiku, nga baza te maja" },
      { value: "66", label: "Kabina karrigesh të brendizuara" },
      { value: "11", label: "Shtylla teleferiku, nga baza te maja" },
      { value: "60m", label: "Gardh druri, i lartë 2m" },
      { value: "2", label: "Shtëpiza të vogla në bazë" },
      { value: "100%", label: "Ekskluzivisht tuajat", filled: true },
    ],
    images: [
      { ...IMG.chairlift, alt: "Kabina teleferiku të brendizuara duke zbritur malin, të mbuluara ekskluzivisht për një sponsor." },
      { ...IMG.station, alt: "Një kabinë teleferiku e brendizuar duke kaluar afër stacionit, e mbuluar plotësisht për një sponsor." },
      { ...IMG.baseFence, alt: "Pamje ajrore e stacioneve të teleferikut në zonën bazë dhe vijës së gardhit kufizues." },
      { ...IMG.pylonSlope, alt: "Një shtyllë e vetme teleferiku e brendizuar përgjatë një piste të gjerë e të hapur." },
    ],
  },
};
