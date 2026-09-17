import type { Locale } from "@/lib/i18n";

export interface AudienceRow {
  title: string;
  detail: string;
}

interface AudienceCopy {
  eyebrowLabel: string;
  headingLine1: string;
  headingLine2: string;
  intro: string;
  rows: AudienceRow[];
  seasonInNumbersLabel: string;
  digitalReachLabel: string;
  digitalReachNote: string;
  planningDisclaimer: string;
}

export const AUDIENCE: Record<Locale, AudienceCopy> = {
  en: {
    eyebrowLabel: "WHO SEES IT",
    headingLine1: "A cross-border crowd",
    headingLine2: "domestic media misses",
    intro:
      "Popova Šapka is the winter meeting point of the Macedonian–Kosovar–Albanian corridor. Buying it reaches three markets and the diaspora at once — from one media plan.",
    rows: [
      {
        title: "Kosovo & Albania",
        detail:
          "The core cross-border audience. They arrive by car, in groups, for the weekend — and are unreachable on Macedonian domestic media.",
      },
      {
        title: "North Macedonia",
        detail: "The loyal Skopje–Tetovo–Polog heartland, plus returning diaspora over the holidays.",
      },
      {
        title: "Athletes & freeriders",
        detail: "An off-piste, cat-ski and content-making following from across the region and beyond.",
      },
      {
        title: "Families & season regulars",
        detail: "Repeat visitors across a season that runs mid-December to early April.",
      },
    ],
    seasonInNumbersLabel: "The season in numbers",
    digitalReachLabel: "Digital reach",
    digitalReachNote:
      "Social, partner channels and the live webcams are sold and reported separately, on figures confirmed from platform analytics.",
    planningDisclaimer:
      "Planning estimates for sponsorship modelling; final figures should be confirmed by the resort operator.",
  },
  mk: {
    eyebrowLabel: "КОЈ ГЛЕДА",
    headingLine1: "Прекугранична публика",
    headingLine2: "што домашните медиуми ја пропуштаат",
    intro:
      "Попова Шапка е зимската средбна точка на македонско–косовско–албанскиот коридор. Со купување на овој простор допирате до три пазари и дијаспората истовремено — преку еден медиа план.",
    rows: [
      {
        title: "Косово и Албанија",
        detail:
          "Основната прекугранична публика. Доаѓаат со автомобил, во групи, за викенд — и не се достапни преку домашните македонски медиуми.",
      },
      {
        title: "Северна Македонија",
        detail: "Верното јадро од Скопје–Тетово–Полог, плус дијаспората што се враќа за празниците.",
      },
      {
        title: "Спортисти и фрирајдери",
        detail: "Публика вон патека, со кет-скии и креатори на содржина од регионот и пошироко.",
      },
      {
        title: "Семејства и редовни посетители",
        detail: "Посетители кои се враќаат во текот на сезоната што трае од средина на декември до почетокот на април.",
      },
    ],
    seasonInNumbersLabel: "Сезоната во бројки",
    digitalReachLabel: "Дигитален досег",
    digitalReachNote:
      "Социјалните мрежи, партнерските канали и живите веб-камери се продаваат и известуваат посебно, врз основа на потврдени податоци од аналитика на платформите.",
    planningDisclaimer:
      "Проценки за планирање на спонзорски модели; конечните бројки треба да ги потврди операторот на центарот.",
  },
  sq: {
    eyebrowLabel: "KUSH E SHIKON",
    headingLine1: "Një turmë ndërkufitare",
    headingLine2: "që mediat vendase e humbasin",
    intro:
      "Popova Shapka është pika e takimit dimëror i koridorit maqedonas–kosovar–shqiptar. Duke e blerë atë, arrini tre tregje dhe diasporën njëkohësisht — nga një plan i vetëm mediatik.",
    rows: [
      {
        title: "Kosova dhe Shqipëria",
        detail:
          "Audienca kryesore ndërkufitare. Vijnë me makinë, në grupe, për fundjavë — dhe janë të paarritshëm përmes mediave vendase maqedonase.",
      },
      {
        title: "Maqedonia e Veriut",
        detail: "Bërthama besnike Shkup–Tetovë–Pollog, plus diaspora që kthehet gjatë festave.",
      },
      {
        title: "Atletë dhe freeriderë",
        detail: "Ndjekës jashtë piste, cat-ski dhe krijues përmbajtjeje nga rajoni e më gjerë.",
      },
      {
        title: "Familje dhe vizitorë të rregullt sezonalë",
        detail: "Vizitorë të përsëritur gjatë një sezoni që zgjat nga mesi i dhjetorit deri në fillim të prillit.",
      },
    ],
    seasonInNumbersLabel: "Sezoni në shifra",
    digitalReachLabel: "Shtrirja dixhitale",
    digitalReachNote:
      "Rrjetet sociale, kanalet partnere dhe kamerat live janë të shitura dhe raportohen veçmas, sipas shifrave të konfirmuara nga analitika e platformave.",
    planningDisclaimer:
      "Vlerësime planifikimi për modelimin e sponsorizimit; shifrat përfundimtare duhet të konfirmohen nga operatori i qendrës.",
  },
};
