import { test, expect, type Page } from "@playwright/test";

const ROUTES: { path: string; lang: string; label: string }[] = [
  { path: "/", lang: "en", label: "EN" },
  { path: "/mk/", lang: "mk", label: "MK" },
  { path: "/sq/", lang: "sq", label: "SQ" },
];

// Anchors/ids that belonged to sections removed from the brief (Map, Section
// 13/Packages, Section 14/The Numbers, Annex/à-la-carte rates) — none of
// these should exist on any route, in any locale.
const DELETED_SECTION_IDS = [
  "#map",
  "#packages",
  "#numbers",
  "#rates",
  "#annex",
  "#the-numbers",
  "#a-la-carte",
];

async function bodyText(page: Page): Promise<string> {
  return (await page.locator("body").innerText()).toLowerCase();
}

test.describe("internationalization", () => {
  for (const { path, lang } of ROUTES) {
    test(`${path} loads and sets html lang="${lang}"`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "load" });
      expect(response?.ok()).toBe(true);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
    });

    test(`${path} declares hreflang alternates for all three locales plus x-default`, async ({
      page,
    }) => {
      await page.goto(path);
      const hreflangs = await page
        .locator('link[rel="alternate"][hreflang]')
        .evaluateAll((links) => links.map((l) => l.getAttribute("hreflang")));

      expect(hreflangs).toEqual(expect.arrayContaining(["en", "mk", "sq", "x-default"]));

      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute("href", new RegExp(path === "/" ? "/$" : `${path}$`));
    });

    test(`${path} contains none of the deleted sections' anchors`, async ({ page }) => {
      await page.goto(path);
      for (const id of DELETED_SECTION_IDS) {
        await expect(page.locator(id)).toHaveCount(0);
      }
    });

    test(`${path} shows no pricing content anywhere in the rendered text`, async ({ page }) => {
      await page.goto(path);
      const text = await bodyText(page);
      expect(text).not.toContain("€");
      expect(text).not.toMatch(/\bcpm\b/);
    });
  }

  test("the language switcher moves between EN, MK and SQ and marks the active one", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    await page.goto("/");
    await expect(page.getByRole("link", { name: "EN", exact: true })).toHaveAttribute(
      "aria-current",
      "page",
    );

    await page.getByRole("link", { name: "MK", exact: true }).click();
    await expect(page).toHaveURL(/\/mk\/?$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "mk");
    await expect(page.getByRole("link", { name: "MK", exact: true })).toHaveAttribute(
      "aria-current",
      "page",
    );

    await page.getByRole("link", { name: "SQ", exact: true }).click();
    await expect(page).toHaveURL(/\/sq\/?$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "sq");
    await expect(page.getByRole("link", { name: "SQ", exact: true })).toHaveAttribute(
      "aria-current",
      "page",
    );

    await page.getByRole("link", { name: "EN", exact: true }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });
});
