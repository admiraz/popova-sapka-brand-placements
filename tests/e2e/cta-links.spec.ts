import { test, expect } from "@playwright/test";

test.describe("principal CTAs", () => {
  test("hero CTAs carry semantic data-cta tracking attributes", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('[data-cta="see-placements"]')).toBeVisible();
    await expect(page.locator('[data-cta="request-proposal"]').first()).toBeVisible();
  });

  test("the contact section's email CTA is a real mailto link", async ({ page }) => {
    await page.goto("/#contact");

    const emailLink = page.getByRole("link", { name: "vm@bs-suite.com" });
    await expect(emailLink).toHaveAttribute("href", "mailto:vm@bs-suite.com");
  });

  test("the contact section's phone CTA is a real tel link", async ({ page }) => {
    await page.goto("/#contact");

    const phoneLink = page.getByRole("link", { name: "+389 75 925 675" });
    await expect(phoneLink).toHaveAttribute("href", "tel:+38975925675");
  });

  test("the footer links to the official resort site in a new tab", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("contentinfo").scrollIntoViewIfNeeded();

    const officialLink = page.getByRole("link", { name: /official resort site/i });
    await expect(officialLink).toHaveAttribute("href", "https://popovashapka.com.mk/en/");
    await expect(officialLink).toHaveAttribute("target", "_blank");
    await expect(officialLink).toHaveAttribute("rel", /noopener/);
  });
});
