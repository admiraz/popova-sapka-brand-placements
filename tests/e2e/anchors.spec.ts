import { test, expect } from "@playwright/test";

test.describe("anchor scrolling", () => {
  test("clicking 'See the placements' lands the section below the sticky header", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /see the placements/i }).click();
    await page.waitForTimeout(400); // let native/Lenis scroll settle

    const headerBottom = await page.locator("header").evaluate((el) => el.getBoundingClientRect().bottom);
    const sectionTop = await page.locator("#placements").evaluate((el) => el.getBoundingClientRect().top);

    expect(sectionTop).toBeGreaterThanOrEqual(headerBottom - 4);
  });

  test("clicking 'Request a proposal' lands the contact section below the sticky header", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /request a proposal/i }).first().click();
    await page.waitForTimeout(400);

    const headerBottom = await page.locator("header").evaluate((el) => el.getBoundingClientRect().bottom);
    const sectionTop = await page.locator("#contact").evaluate((el) => el.getBoundingClientRect().top);

    expect(sectionTop).toBeGreaterThanOrEqual(headerBottom - 4);
  });

  test("the logo links back to the top of the page", async ({ page }) => {
    await page.goto("/#contact");
    await page.waitForTimeout(300);

    await page.getByRole("link", { name: /back to top/i }).click();
    await page.waitForTimeout(400);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(50);
  });
});
