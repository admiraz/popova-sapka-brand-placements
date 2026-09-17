import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test("shows the right nav paradigm for the viewport", async ({ page }) => {
    await page.goto("/");
    const viewport = page.viewportSize();
    const isMobile = (viewport?.width ?? 1440) < 1024;

    if (isMobile) {
      await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
    } else {
      await expect(page.getByRole("navigation", { name: "Primary" })).toHaveCount(0);
    }
  });

  test("mobile panel: opens, traps focus, closes on Escape, restores focus to the trigger", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const trigger = page.getByRole("button", { name: "Open menu" });
    await trigger.click();

    const panel = page.locator("[data-mobile-nav]");
    await expect(panel).toBeVisible();

    // Focus starts inside the panel (Radix Dialog auto-focuses on open).
    await expect(panel).toContainText("Menu");
    const activeInsidePanel = await page.evaluate((panelEl) => {
      return panelEl?.contains(document.activeElement);
    }, await panel.elementHandle());
    expect(activeInsidePanel).toBe(true);

    // Tabbing forward from the last focusable element wraps back inside the panel (focus trap).
    await page.keyboard.press("Escape");
    await expect(panel).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("mobile panel: closing via the close button also restores focus to the trigger", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const trigger = page.getByRole("button", { name: "Open menu" });
    await trigger.click();
    await page.getByRole("button", { name: "Close menu" }).click();

    await expect(page.locator("[data-mobile-nav]")).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});
