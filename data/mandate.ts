import type { Locale } from "@/lib/i18n";

export interface MandateCard {
  eyebrow: string;
  title: string;
  detail: string;
  filled?: boolean;
}

interface MandateCopy {
  eyebrowLabel: string;
  headingLine1: string;
  headingLine2: string;
  intro: string;
  cards: MandateCard[];
}

export const MANDATE: Record<Locale, MandateCopy> = {
  en: {
    eyebrowLabel: "THE MANDATE",
    headingLine1: "Who you're",
    headingLine2: "buying from",
    intro: "One contract, one point of contact. Every placement on this page is inventory we are mandated to sell.",
    cards: [
      {
        eyebrow: "OFFICIAL PARTNER",
        title: "BS Suite",
        detail:
          "Official advertising partner for Popova Šapka / Kodra e Diellit, responsible for managing all commercial advertising opportunities at the resort.",
        filled: true,
      },
      {
        eyebrow: "IN COOPERATION WITH",
        title: "Ski Center Popova Shapka",
        detail: "The resort operator. Placements are approved, installed and maintained with the operator, not around it.",
      },
      {
        eyebrow: "CONTRACTED INVENTORY",
        title: "The agreed inventory for the winter season",
        detail:
          "Every spot shown is live, allocatable and covered by the partnership agreement. Partner references available on request.",
      },
    ],
  },
  mk: {
    eyebrowLabel: "МАНДАТ",
    headingLine1: "Од кого",
    headingLine2: "купувате",
    intro: "Еден договор, едно контакт лице. Секој рекламен простор на оваа страница е инвентар кој сме овластени да го продаваме.",
    cards: [
      {
        eyebrow: "ОФИЦИЈАЛЕН ПАРТНЕР",
        title: "BS Suite",
        detail:
          "Официјален рекламен партнер за Попова Шапка / Kodra e Diellit, одговорен за управување со сите комерцијални рекламни можности во центарот.",
        filled: true,
      },
      {
        eyebrow: "ВО СОРАБОТКА СО",
        title: "Скијачки центар Попова Шапка",
        detail: "Операторот на центарот. Рекламните простори се одобруваат, монтираат и одржуваат заедно со операторот, не мимо него.",
      },
      {
        eyebrow: "ДОГОВОРЕН ИНВЕНТАР",
        title: "Договорениот инвентар за зимската сезона",
        detail:
          "Секој прикажан простор е активен, распределлив и покриен со партнерскиот договор. Референци од партнери достапни на барање.",
      },
    ],
  },
  sq: {
    eyebrowLabel: "MANDATI",
    headingLine1: "Nga kush",
    headingLine2: "po blini",
    intro: "Një kontratë, një pikë kontakti. Çdo vendosje në këtë faqe është inventar që jemi të autorizuar ta shesim.",
    cards: [
      {
        eyebrow: "PARTNER ZYRTAR",
        title: "BS Suite",
        detail:
          "Partner zyrtar reklamimi për Popova Shapka / Kodra e Diellit, përgjegjës për menaxhimin e të gjitha mundësive komerciale të reklamimit në qendër.",
        filled: true,
      },
      {
        eyebrow: "NË BASHKËPUNIM ME",
        title: "Qendra e Skijimit Popova Shapka",
        detail: "Operatori i qendrës. Vendosjet miratohen, instalohen dhe mirëmbahen së bashku me operatorin, jo pa dijeninë e tij.",
      },
      {
        eyebrow: "INVENTARI I KONTRAKTUAR",
        title: "Inventari i rënë dakord për sezonin dimëror",
        detail:
          "Çdo vend i shfaqur është aktiv, i disponueshëm dhe i mbuluar nga marrëveshja e partneritetit. Referenca partnerësh në dispozicion me kërkesë.",
      },
    ],
  },
};
