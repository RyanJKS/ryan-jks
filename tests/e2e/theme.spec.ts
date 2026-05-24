import { expect, test } from "@playwright/test";

test.describe("theme toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    });
  });

  test("switches between light and dark themes", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /Switch to (light|dark) theme/i });

    await expect(page.locator("html")).not.toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    await expect.poll(async () => page.evaluate(() => localStorage.getItem("theme"))).toBe("dark");

    await toggle.click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
    await expect.poll(async () => page.evaluate(() => localStorage.getItem("theme"))).toBe("light");
  });
});
