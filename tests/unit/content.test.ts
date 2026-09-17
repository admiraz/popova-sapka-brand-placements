import { describe, expect, it } from "vitest";
import { STATS } from "@/data/stats";
import { TICKET_OFFICE } from "@/data/ticket-office";
import { PLACEMENTS, PLACEMENTS_TOTAL } from "@/data/placements";
import { LOCALES } from "@/lib/i18n";

describe("contractual figures are transcribed exactly (English)", () => {
  it("keeps the four resort stats in the exact figures from the prospectus", () => {
    expect(STATS.en.map((s) => s.title)).toEqual(["100–150k", "5–8k", "4–6 hrs", "≈150"]);
  });
});

describe("no pricing content remains in the data layer, in any locale", () => {
  for (const locale of LOCALES) {
    it(`has no euro/price figures anywhere in the ticket-office feature (${locale})`, () => {
      const serialized = JSON.stringify(TICKET_OFFICE[locale]);
      expect(serialized).not.toMatch(/€|per season|per lift|per station|per board/i);
    });

    it(`has no euro/price figures anywhere in the standard placements (${locale})`, () => {
      const serialized = JSON.stringify(PLACEMENTS[locale]);
      expect(serialized).not.toMatch(/€|per season|per lift|per station|per board/i);
    });
  }

  it("keeps exactly 5 total placements for the 'PLACEMENT 0X / 05' badge", () => {
    expect(PLACEMENTS_TOTAL).toBe(5);
    expect(PLACEMENTS.en).toHaveLength(4);
  });
});

describe("every locale is fully populated (no accidental English fallback text)", () => {
  it("has distinct, non-empty content for en/mk/sq", () => {
    for (const locale of LOCALES) {
      expect(STATS[locale].length).toBeGreaterThan(0);
      expect(PLACEMENTS[locale].length).toBe(4);
    }
    // Macedonian and Albanian must actually differ from English, not just
    // reuse it as a placeholder.
    expect(STATS.mk[0]!.detail).not.toBe(STATS.en[0]!.detail);
    expect(STATS.sq[0]!.detail).not.toBe(STATS.en[0]!.detail);
  });
});
