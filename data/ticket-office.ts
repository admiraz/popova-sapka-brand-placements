import type { Locale } from "@/lib/i18n";

export interface TicketOfficeStat {
  value: string;
  label: string;
  filled?: boolean;
}

interface TicketOfficeCopy {
  eyebrowNumber: string;
  eyebrowLabel: string;
  placementId: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  imageAlt: string;
  stats: TicketOfficeStat[];
}

export const TICKET_OFFICE_IMAGE = {
  src: "/assets/08-ticket-office-branding.jpg",
  width: 898,
  height: 1024,
};

/**
 * The 5th placement — split out of PLACEMENTS into its own full-width
 * feature (see components/sections/TicketOfficeFeature.tsx) since it's a
 * visually distinct, single-sponsor moment rather than one of the four
 * standard alternating placement blocks.
 */
export const TICKET_OFFICE: Record<Locale, TicketOfficeCopy> = {
  en: {
    eyebrowNumber: "09",
    eyebrowLabel: "FEATURED PLACEMENT",
    placementId: "05",
    titleLine1: "Ticket office",
    titleLine2: "full branding",
    description:
      "A full ticket-office cabin takeover at the highest-dwell base-area touchpoint — passed by every skier, family and weekend visitor before entering the mountain.",
    imageAlt: "Ticket office cabin fully wrapped in 'Your Brand Here' branding with two skiers approaching the door.",
    stats: [
      { value: "1", label: "Full cabin takeover" },
      { value: "100%", label: "Base-area visibility" },
      { value: "5", label: "Branding surfaces" },
      { value: "All", label: "Guests pass this point" },
      { value: "Included", label: "Print, install & maintenance", filled: true },
    ],
  },
  mk: {
    eyebrowNumber: "09",
    eyebrowLabel: "ИСТАКНАТ ПРОСТОР",
    placementId: "05",
    titleLine1: "Билетарница —",
    titleLine2: "целосно брендирање",
    description:
      "Целосно преземање на кабината на билетарницата на точката со најголемо задржување во базата — низ неа минуваат сите скијачи, семејства и викенд-посетители пред да влезат на планината.",
    imageAlt: "Кабина на билетарница целосно обложена со брендирање „Your Brand Here“, со двајца скијачи што се приближуваат до вратата.",
    stats: [
      { value: "1", label: "Целосно преземена кабина" },
      { value: "100%", label: "Видливост во базата" },
      { value: "5", label: "Рекламни површини" },
      { value: "Сите", label: "Гости минуваат оттука" },
      { value: "Вклучено", label: "Печатење, монтажа и одржување", filled: true },
    ],
  },
  sq: {
    eyebrowNumber: "09",
    eyebrowLabel: "VENDOSJA E VEÇANTË",
    placementId: "05",
    titleLine1: "Zyra e biletave —",
    titleLine2: "brendim i plotë",
    description:
      "Marrje e plotë e kabinës së zyrës së biletave, në pikën me qëndrimin më të gjatë të zonës bazë — nga aty kalojnë të gjithë skiatorët, familjet dhe vizitorët e fundjavës para se të hyjnë në mal.",
    imageAlt: "Kabinë e zyrës së biletave e mbuluar plotësisht me brendimin 'Your Brand Here', me dy skiatorë duke iu afruar derës.",
    stats: [
      { value: "1", label: "Marrje e plotë e kabinës" },
      { value: "100%", label: "Dukshmëri në zonën bazë" },
      { value: "5", label: "Sipërfaqe brendimi" },
      { value: "Të gjithë", label: "Mysafirët kalojnë këtu" },
      { value: "Përfshirë", label: "Printim, instalim dhe mirëmbajtje", filled: true },
    ],
  },
};
