import { expect, test } from "@playwright/test";
import { portfolio } from "../../src/data/portfolio";

test.describe("seo metadata", () => {
  test("sets core document metadata on the homepage", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(portfolio.seo.title);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", portfolio.seo.description);

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", portfolio.seo.title);

    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute("content", portfolio.seo.description);

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", portfolio.siteUrl);
  });

  test("includes structured person schema", async ({ page }) => {
    await page.goto("/");

    const schema = page.locator('script[type="application/ld+json"]');
    await expect(schema).toHaveCount(1);

    const json = JSON.parse((await schema.textContent()) ?? "{}");
    expect(json["@type"]).toBe("Person");
    expect(json.name).toBe(portfolio.fullName);
  });
});
