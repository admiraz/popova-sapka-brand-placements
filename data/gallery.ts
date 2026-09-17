import type { Locale } from "@/lib/i18n";

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryCopy {
  eyebrowLabel: string;
  /** White text before the cyan accent word, same line (empty if the accent word leads). */
  headingPrefix: string;
  /** The cyan two-tone accent word. */
  headingAccent: string;
  /** White text on its own line beneath the accent. */
  headingSuffix: string;
  intro: string;
  images: GalleryImage[];
}

const IMG = {
  slope: { src: "/assets/15-gallery-slope.jpg", width: 880, height: 478 },
  snowboarder: { src: "/assets/16-gallery-snowboarder.jpg", width: 880, height: 478 },
  baseView: { src: "/assets/17-gallery-base-view.jpg", width: 880, height: 478 },
  chairlift: { src: "/assets/18-gallery-chairlift.jpg", width: 880, height: 478 },
  piste: { src: "/assets/19-gallery-piste.jpg", width: 880, height: 478 },
  forest: { src: "/assets/20-gallery-forest.jpg", width: 880, height: 478 },
};

export const GALLERY: Record<Locale, GalleryCopy> = {
  en: {
    eyebrowLabel: "THE MOUNTAIN",
    headingPrefix: "The ",
    headingAccent: "canvas",
    headingSuffix: "you're buying into",
    intro: "≈150 sunny days, world-class off-piste and the crowd that comes for it.",
    images: [
      { ...IMG.slope, alt: "Open groomed piste on Popova Šapka with a wide mountain ridge in the background." },
      { ...IMG.snowboarder, alt: "Snowboarder catching air beside the chairlift line on a sunny run." },
      { ...IMG.baseView, alt: "Elevated view over the base village and lift line toward the surrounding mountains." },
      { ...IMG.chairlift, alt: "Branded chairlift cabins riding above the snowfield toward the summit." },
      { ...IMG.piste, alt: "A ski run following the chairlift line down toward the base station." },
      { ...IMG.forest, alt: "Snow-laden pine forest along a ridge under a clear blue sky." },
    ],
  },
  mk: {
    eyebrowLabel: "ПЛАНИНАТА",
    headingPrefix: "",
    headingAccent: "Платното",
    headingSuffix: "во кое инвестирате",
    intro: "≈150 сончеви денови, врвен терен за фрирајд и толпата што доаѓа заради нив.",
    images: [
      { ...IMG.slope, alt: "Отворена уредена патека на Попова Шапка со широк планински гребен во позадина." },
      { ...IMG.snowboarder, alt: "Сноубордер скока во воздух покрај линијата на жичарницата на сончева патека." },
      { ...IMG.baseView, alt: "Поглед од височина над основното село и линијата на лифтот кон околните планини." },
      { ...IMG.chairlift, alt: "Брендирани кабини на жичарница се движат над снежното поле кон врвот." },
      { ...IMG.piste, alt: "Скијачка патека што ја следи линијата на жичарницата надолу кон базната станица." },
      { ...IMG.forest, alt: "Борова шума покриена со снег долж гребен под јасно сино небо." },
    ],
  },
  sq: {
    eyebrowLabel: "MALI",
    headingPrefix: "",
    headingAccent: "Peizazhi",
    headingSuffix: "që po blini",
    intro: "≈150 ditë me diell, teren freeride në nivel botëror dhe turma që vjen për të.",
    images: [
      { ...IMG.slope, alt: "Pistë e hapur e sistemuar në Popova Shapka me një kreshtë të gjerë malore në sfond." },
      { ...IMG.snowboarder, alt: "Snowboardist duke kapur ajër pranë linjës së teleferikut në një pistë me diell." },
      { ...IMG.baseView, alt: "Pamje nga lart mbi fshatin bazë dhe linjën e teleferikut drejt maleve përreth." },
      { ...IMG.chairlift, alt: "Kabina teleferiku të brendizuara duke kaluar mbi fushën e borës drejt majës." },
      { ...IMG.piste, alt: "Një pistë skijimi që ndjek linjën e teleferikut poshtë drejt stacionit bazë." },
      { ...IMG.forest, alt: "Pyll pishash i mbuluar me borë përgjatë një kreshte nën një qiell blu të kthjellët." },
    ],
  },
};
