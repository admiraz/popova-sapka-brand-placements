import type { Locale } from "@/lib/i18n";

interface ContactCopy {
  eyebrowLabel: string;
  headingLine1: string;
  headingLine2: string;
  partnerLabel: string;
  ctaParagraph: string;
}

export const CONTACT: Record<Locale, ContactCopy> = {
  en: {
    eyebrowLabel: "NEXT STEP",
    headingLine1: "Reserve your category",
    headingLine2: "before prime locations close",
    partnerLabel: "BS Suite · Sponsorship & advertising partner",
    ctaParagraph: "Request available categories and a tailored proposal for your brand.",
  },
  mk: {
    eyebrowLabel: "СЛЕДЕН ЧЕКОР",
    headingLine1: "Резервирајте ја вашата категорија",
    headingLine2: "пред најдобрите локации да се затворат",
    partnerLabel: "BS Suite · Партнер за спонзорство и реклама",
    ctaParagraph: "Побарајте достапни категории и приспособена понуда за вашиот бренд.",
  },
  sq: {
    eyebrowLabel: "HAPI TJETËR",
    headingLine1: "Rezervoni kategorinë tuaj",
    headingLine2: "para se vendet kryesore të mbyllen",
    partnerLabel: "BS Suite · Partner sponsorizimi dhe reklamimi",
    ctaParagraph: "Kërkoni kategoritë e disponueshme dhe një propozim të përshtatur për markën tuaj.",
  },
};
