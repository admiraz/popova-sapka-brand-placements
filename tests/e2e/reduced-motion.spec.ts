import { test, expect } from "@playwright/test";

test.describe("prefers-reduced-motion", () => {
  test("hero content is fully visible immediately, with no animated entrance", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toHaveCSS("opacity", "1");

    const image = page.locator("[data-hero-image] img").first();
    await expect(image).toHaveCSS("opacity", "1");
  });

  test("section content below the fold is visible without scrolling to trigger it", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#opportunity");

    const heading = page.locator("#opportunity-heading");
    await expect(heading).toHaveCSS("opacity", "1");
  });
});
