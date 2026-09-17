import { test, expect } from "@playwright/test";

const BREAKPOINTS = [375, 430, 768, 1024, 1280, 1440, 1920];

test.describe("responsive layout", () => {
  for (const width of BREAKPOINTS) {
    test(`no horizontal scroll at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/", { waitUntil: "load" });
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });
  }

  test("placement photographs keep their natural aspect ratio — no stretching or cropping", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/#placements");

    // The first placement's primary image (02-piste-entry-billboard.jpg is 1004x1086).
    const image = page.locator('#placements img[alt*="barrier billboard"]').first();
    await image.scrollIntoViewIfNeeded();
    const box = await image.boundingBox();
    expect(box).not.toBeNull();

    const naturalRatio = 1004 / 1086;
    const renderedRatio = box!.width / box!.height;
    expect(Math.abs(renderedRatio - naturalRatio)).toBeLessThan(0.02);

    const objectFit = await image.evaluate((el) => getComputedStyle(el).objectFit);
    expect(objectFit).not.toBe("cover");
  });

  test("on mobile, the placement image appears above its text, not beside it", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/#placements");

    const firstBlock = page.locator("#placements .container > div").first();
    const image = firstBlock.locator("img").first();
    const heading = firstBlock.locator("h3").first();

    const imageBox = await image.boundingBox();
    const headingBox = await heading.boundingBox();
    expect(imageBox).not.toBeNull();
    expect(headingBox).not.toBeNull();
    expect(imageBox!.y).toBeLessThan(headingBox!.y);
  });

  test("on desktop, placement text sits left and the photograph sits right", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/#placements");

    const firstBlock = page.locator("#placements .container > div").first();
    const image = firstBlock.locator("img").first();
    const heading = firstBlock.locator("h3").first();

    const imageBox = await image.boundingBox();
    const headingBox = await heading.boundingBox();
    expect(imageBox).not.toBeNull();
    expect(headingBox).not.toBeNull();
    expect(headingBox!.x).toBeLessThan(imageBox!.x);
  });

  test("the ticket-office feature spans the full section width on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/#ticket-office");

    const section = page.locator("#ticket-office");
    const box = await section.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThan(1400);
  });
});
