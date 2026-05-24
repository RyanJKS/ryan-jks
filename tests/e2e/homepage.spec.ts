import { expect, test } from "@playwright/test";
import { portfolio } from "../../src/data/portfolio";
import { SECTION_IDS } from "../../src/lib/validate-portfolio";

test.describe("homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders hero, navigation, and every content section", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      portfolio.hero.kinetic.prefix,
    );

    for (const { label } of portfolio.nav) {
      await expect(page.getByRole("navigation", { name: "Primary" })).toContainText(label);
    }

    for (const id of SECTION_IDS) {
      await expect(page.locator(`#${id}[data-section-heading]`)).toBeAttached();
    }
  });

  test("exposes a single primary h1", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("renders workflow steps from content data", async ({ page }) => {
    const processSection = page.locator("section").filter({ has: page.locator("#process") });
    await processSection.scrollIntoViewIfNeeded();

    await expect(processSection.locator("ul li")).toHaveCount(portfolio.workflow.steps.length);
    await expect(
      processSection.getByRole("heading", { level: 3, name: portfolio.workflow.steps[0].title }),
    ).toBeVisible();

    const lastStep = portfolio.workflow.steps.at(-1)!;
    await processSection
      .getByRole("button", { name: new RegExp(lastStep.title, "i") })
      .first()
      .click();
    await expect(
      processSection.getByRole("heading", { level: 3, name: lastStep.title }),
    ).toBeVisible();
  });
});
