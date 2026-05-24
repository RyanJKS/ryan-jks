import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { portfolio } from "../../src/data/portfolio";

const PAGES = [
  { name: "home", path: "/" },
  { name: "about section", path: "/#about" },
  { name: "process section", path: "/#process" },
  { name: "contact section", path: "/#contact" },
];

for (const { name, path } of PAGES) {
  test(`${name} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState("networkidle");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "best-practice"])
      .analyze();

    const serious = results.violations.filter(
      (violation) => violation.impact === "serious" || violation.impact === "critical",
    );

    expect(
      serious,
      serious.map((violation) => `${violation.id}: ${violation.description}`).join("\n"),
    ).toEqual([]);
  });
}

test("primary navigation and hero CTAs are keyboard reachable", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: `${portfolio.name} home` })).toBeFocused();

  await page.getByRole("link", { name: "See my process" }).focus();
  await expect(page.getByRole("link", { name: "See my process" })).toBeFocused();
});
