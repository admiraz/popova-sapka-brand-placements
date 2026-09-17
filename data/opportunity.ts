import type { Locale } from "@/lib/i18n";

export interface OpportunityCard {
  id: string;
  title: string;
  detail: string;
}

interface OpportunityCopy {
  headingLine1: string;
  headingLine2: string;
  lead: string;
  cards: OpportunityCard[];
}

export const OPPORTUNITY: Record<Locale, OpportunityCopy> = {
  en: {
    headingLine1: "The mountain is",
    headingLine2: "premium ad space",
    lead: "A roadside billboard gets a two-second glance. A board on the piste or a wrap on the lift is seen for hours, on repeat, in a place people love — and photograph.",
    cards: [
      { id: "01", title: "Dwell, not glances", detail: "Guests spend hours on the mountain, in view of your brand." },
      { id: "02", title: "Built-in repetition", detail: "Every lift ride and every run delivers the message again." },
      { id: "03", title: "Loved & uncluttered", detail: "A high-emotion setting with almost no competing advertising." },
    ],
  },
  mk: {
    headingLine1: "Планината е",
    headingLine2: "врвен рекламен простор",
    lead: "Еден билборд покрај патот добива поглед од две секунди. Табла на скијачка патека или облога на лифт се гледа со часови, постојано, на место што луѓето го сакаат — и го фотографираат.",
    cards: [
      { id: "01", title: "Задржување, не само поглед", detail: "Гостите поминуваат часови на планината, во видното поле на вашиот бренд." },
      { id: "02", title: "Вградено повторување", detail: "Секоја возба со лифт и секое спуштање ја пренесуваат пораката повторно." },
      { id: "03", title: "Сакана и без пренатрупаност", detail: "Средина со силна емоција, со речиси никаква конкурентна реклама." },
    ],
  },
  sq: {
    headingLine1: "Mali është",
    headingLine2: "hapësirë reklamimi e klasit të lartë",
    lead: "Një billboard anë rruge merr një vështrim dy-sekondësh. Një tabelë në pistë ose një veshje mbi teleferik shihet për orë të tëra, vazhdimisht, në një vend që njerëzit e duan — dhe e fotografojnë.",
    cards: [
      { id: "01", title: "Qëndrim, jo shikime të shpejta", detail: "Mysafirët kalojnë orë të tëra në mal, në fushëpamjen e markës suaj." },
      { id: "02", title: "Përsëritje e integruar", detail: "Çdo udhëtim me teleferik dhe çdo zbritje e përcjell mesazhin sërish." },
      { id: "03", title: "E dashur dhe pa mbingarkesë", detail: "Një mjedis me emocion të lartë, pothuajse pa reklama konkurruese." },
    ],
  },
};
