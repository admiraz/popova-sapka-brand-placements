import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const LOCALE_PATHS = [
  { path: "/", openMenuLabel: "Open menu" },
  { path: "/mk/", openMenuLabel: "Отвори мени" },
  { path: "/sq/", openMenuLabel: "Hap menynë" },
];

test.describe("accessibility", () => {
  for (const { path } of LOCALE_PATHS) {
    test(`${path} has no automatically detectable a11y violations`, async ({ page }) => {
      // Reduced motion skips the hero's GSAP entrance timeline entirely (see
      // lib/use-hero-timeline.ts), so the scan evaluates the page's settled
      // resting state rather than a mid-fade animation frame — scanning
      // during a deliberate opacity transition would report transient,
      // meaningless "violations" on colors that never actually rest there.
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(path, { waitUntil: "load" });
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

      // [data-ghost] marks the ghost-numeral/ghost-script background
      // watermarks (see components/decorative/GhostNumeral.tsx and
      // GhostScript.tsx) — large, very-low-opacity decorative text explicitly
      // called out in the brief as aria-hidden texture, not content. WCAG's
      // own contrast exception for pure decoration applies; axe can't tell
      // "decorative watermark" from "real low-contrast text" so this
      // exclusion is a deliberate, narrow, and documented one.
      const results = await new AxeBuilder({ page }).exclude("[data-ghost]").analyze();
      expect(results.violations).toEqual([]);
    });

    test(`${path} has exactly one h1`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    });
  }

  for (const { path, openMenuLabel } of LOCALE_PATHS) {
    test(`${path} mobile nav panel has no automatically detectable a11y violations when open`, async ({
      page,
    }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(path);
      await page.getByRole("button", { name: openMenuLabel }).click();

      const results = await new AxeBuilder({ page }).include("[data-mobile-nav]").analyze();
      expect(results.violations).toEqual([]);
    });
  }
});
