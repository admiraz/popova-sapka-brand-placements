import type { Locale } from "@/lib/i18n";

export interface PlacementImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PlacementBlock {
  id: string; // "01".."04" — also drives the "PLACEMENT 0X / 05" badge
  eyebrowNumber: string;
  eyebrowLabel: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  bullets: string[];
  images: PlacementImage[];
}

/** Total placement count for the "PLACEMENT 0X / 05" badge — 4 standard
 * blocks here plus the featured full-width placement in ticket-office.ts. */
export const PLACEMENTS_TOTAL = 5;

// src/width/height never change per locale — only alt text does.
const IMG = {
  pisteEntry: { src: "/assets/02-piste-entry-billboard.jpg", width: 1004, height: 1086 },
  pylonWide: { src: "/assets/03-pylon-banners-wide.jpg", width: 1543, height: 941 },
  pylonBase: { src: "/assets/04-pylon-base-closeup.jpg", width: 1086, height: 1002 },
  pylonTrees: { src: "/assets/05-pylon-banner-trees.jpg", width: 1086, height: 1002 },
  liftStation: { src: "/assets/06-lift-station-canopy.jpg", width: 1138, height: 1230 },
  chairliftSeats: { src: "/assets/07-chairlift-seats.jpg", width: 1539, height: 1022 },
};

export const PLACEMENTS: Record<Locale, PlacementBlock[]> = {
  en: [
    {
      id: "01",
      eyebrowNumber: "05",
      eyebrowLabel: "SEE IT ON THE MOUNTAIN",
      titleLine1: "Piste-entry",
      titleLine2: "billboards",
      description: "Long barrier boards running through entries of ski-lifts seen by every skier.",
      bullets: ["Lift-queue & finish zones", "High-dwell, slow-speed viewing", "A sequence along a whole run"],
      images: [
        {
          ...IMG.pisteEntry,
          alt: "Navy barrier billboard reading 'Your Brand Here' running along a piste entry, mountain ridge behind.",
        },
      ],
    },
    {
      id: "02",
      eyebrowNumber: "06",
      eyebrowLabel: "SEE IT ON THE MOUNTAIN",
      titleLine1: "Lift pylon",
      titleLine2: "banners",
      description: "Banners mounted on the lift towers, in view the length of every ride up.",
      bullets: ["Repeated on every pylon", "At eye level from the chair", "A panoramic mountain backdrop"],
      images: [
        {
          ...IMG.pylonWide,
          alt: "Two branded lift pylons carrying 'Your Brand Here' banners across an open snow slope.",
        },
        { ...IMG.pylonBase, alt: "Close-up of a branded pylon base sign reading 'Your Brand Here'." },
        {
          ...IMG.pylonTrees,
          alt: "A single branded pylon banner set against a line of snow-covered pine trees.",
        },
      ],
    },
    {
      id: "03",
      eyebrowNumber: "07",
      eyebrowLabel: "SEE IT ON THE MOUNTAIN",
      titleLine1: "Ski lift",
      titleLine2: "station",
      description: "Branding on the station canopy, at load and unload.",
      bullets: ["Seen & touched every ascent", "Station facade at the queue", "A moving billboard on the line"],
      images: [
        {
          ...IMG.liftStation,
          alt: "Chairlift cabin canopy branded 'Your Brand Here' departing the lift station.",
        },
      ],
    },
    {
      id: "04",
      eyebrowNumber: "08",
      eyebrowLabel: "SEE IT ON THE MOUNTAIN",
      titleLine1: "Chairlift",
      titleLine2: "seats",
      description: "Your logo on every seat-back — in view the whole way up the lift.",
      bullets: ["Hundreds of impressions an hour", "Close-up and unmissable", "Photographed constantly"],
      images: [
        {
          ...IMG.chairliftSeats,
          alt: "Row of chairlift seat-backs branded 'Your Logo Here' descending the lift line.",
        },
      ],
    },
  ],
  mk: [
    {
      id: "01",
      eyebrowNumber: "05",
      eyebrowLabel: "ВИДЕТЕ ГО НА ПЛАНИНАТА",
      titleLine1: "Билборди на",
      titleLine2: "влезот на патеката",
      description: "Долги бариерни табли поставени низ влезовите на скилифтовите, видливи за секој скијач.",
      bullets: ["Редици на лифт и зони на финиш", "Долго задржување, бавно набљудување", "Низа табли долж целата патека"],
      images: [
        {
          ...IMG.pisteEntry,
          alt: "Темносина бариерна табла со натпис „Your Brand Here“ долж влезот на патеката, со планински гребен во позадина.",
        },
      ],
    },
    {
      id: "02",
      eyebrowNumber: "06",
      eyebrowLabel: "ВИДЕТЕ ГО НА ПЛАНИНАТА",
      titleLine1: "Транспаренти на",
      titleLine2: "столбовите на лифтот",
      description: "Транспаренти монтирани на кулите на лифтот, видливи по целата должина на возењето нагоре.",
      bullets: ["Повторени на секој столб", "На висина на очи од седиштето", "Панорамска планинска позадина"],
      images: [
        {
          ...IMG.pylonWide,
          alt: "Два брендирани столба на лифтот со транспаренти „Your Brand Here“ преку отворена снежна падина.",
        },
        { ...IMG.pylonBase, alt: "Крупен план на брендирана табла на подножјето на столб со натпис „Your Brand Here“." },
        {
          ...IMG.pylonTrees,
          alt: "Еден брендиран транспарент на столб на фон на редица снегом покриени борови.",
        },
      ],
    },
    {
      id: "03",
      eyebrowNumber: "07",
      eyebrowLabel: "ВИДЕТЕ ГО НА ПЛАНИНАТА",
      titleLine1: "Станица на",
      titleLine2: "скилифтот",
      description: "Брендирање на надстрешницата на станицата, при качување и слегување.",
      bullets: ["Видено и допрено при секое качување", "Фасада на станицата во редицата", "Подвижен билборд на линијата"],
      images: [
        {
          ...IMG.liftStation,
          alt: "Надстрешница на кабина на жичарница брендирана со „Your Brand Here“ при поаѓање од станицата.",
        },
      ],
    },
    {
      id: "04",
      eyebrowNumber: "08",
      eyebrowLabel: "ВИДЕТЕ ГО НА ПЛАНИНАТА",
      titleLine1: "Седишта на",
      titleLine2: "жичарницата",
      description: "Вашето лого на секој грб од седиштето — видливо по целиот пат нагоре со лифтот.",
      bullets: ["Стотици прегледи на час", "Од блиску и неизбежно", "Постојано се фотографира"],
      images: [
        {
          ...IMG.chairliftSeats,
          alt: "Низа грбови од седишта на жичарница брендирани со „Your Logo Here“ при спуштање по линијата.",
        },
      ],
    },
  ],
  sq: [
    {
      id: "01",
      eyebrowNumber: "05",
      eyebrowLabel: "SHIKOJE NË MAL",
      titleLine1: "Billborde në",
      titleLine2: "hyrje të pistës",
      description: "Tabela të gjata pengese përgjatë hyrjeve të teleferikëve, të dukshme për çdo skiator.",
      bullets: ["Radhët e teleferikut dhe zonat e finishit", "Vështrim i gjatë, me shpejtësi të ulët", "Një sekuencë përgjatë gjithë pistës"],
      images: [
        {
          ...IMG.pisteEntry,
          alt: "Billboard pengese blu marine me mbishkrimin 'Your Brand Here' përgjatë hyrjes së pistës, me kreshtën malore pas.",
        },
      ],
    },
    {
      id: "02",
      eyebrowNumber: "06",
      eyebrowLabel: "SHIKOJE NË MAL",
      titleLine1: "Banderola në",
      titleLine2: "shtyllat e teleferikut",
      description: "Banderola të montuara në shtyllat e teleferikut, të dukshme gjatë gjithë udhëtimit lart.",
      bullets: ["Të përsëritura në çdo shtyllë", "Në nivel të syve nga karrigia", "Sfond panoramik malor"],
      images: [
        {
          ...IMG.pylonWide,
          alt: "Dy shtylla teleferiku të brendizuara me banderola 'Your Brand Here' përgjatë një shpati të hapur me dëborë.",
        },
        { ...IMG.pylonBase, alt: "Pamje nga afër e një tabele të brendizuar në bazën e shtyllës me mbishkrimin 'Your Brand Here'." },
        {
          ...IMG.pylonTrees,
          alt: "Një banderolë e vetme e brendizuar në shtyllë, me pisha të mbuluara nga bora në sfond.",
        },
      ],
    },
    {
      id: "03",
      eyebrowNumber: "07",
      eyebrowLabel: "SHIKOJE NË MAL",
      titleLine1: "Stacioni i",
      titleLine2: "teleferikut",
      description: "Brendim në tendën e stacionit, në ngarkim dhe zbritje.",
      bullets: ["Shihet dhe preket në çdo ngjitje", "Fasada e stacionit tek radha", "Një billboard lëvizës në linjë"],
      images: [
        {
          ...IMG.liftStation,
          alt: "Tenda e kabinës së teleferikut e brendizuar me 'Your Brand Here' duke u nisur nga stacioni.",
        },
      ],
    },
    {
      id: "04",
      eyebrowNumber: "08",
      eyebrowLabel: "SHIKOJE NË MAL",
      titleLine1: "Ndenjëset e",
      titleLine2: "teleferikut",
      description: "Logoja juaj në pjesën e pasme të çdo ndenjëseje — e dukshme gjatë gjithë rrugës lart me teleferik.",
      bullets: ["Qindra impresione në orë", "Nga afër dhe e pashmangshme", "E fotografuar vazhdimisht"],
      images: [
        {
          ...IMG.chairliftSeats,
          alt: "Radhë ndenjësesh teleferiku me shpinore të brendizuara 'Your Logo Here' duke zbritur linjën.",
        },
      ],
    },
  ],
};
