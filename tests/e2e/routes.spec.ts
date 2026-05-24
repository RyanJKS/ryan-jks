import { expect, test } from "@playwright/test";
import { portfolio } from "../../src/data/portfolio";

test.describe("public routes", () => {
  test("serves robots.txt with sitemap reference", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.ok()).toBeTruthy();

    const body = await response.text();
    expect(body).toMatch(/User-Agent:\s*\*/i);
    expect(body).toContain("Allow: /");
    expect(body).toContain(`${portfolio.siteUrl}/sitemap.xml`);
  });

  test("serves sitemap.xml with the site root", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBeTruthy();

    const body = await response.text();
    expect(body).toContain("<urlset");
    expect(body).toContain(`<loc>${portfolio.siteUrl}</loc>`);
  });

  test("returns a not-found page for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-route-should-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: /not found|404/i })).toBeVisible();
  });
});

test("external links open safely in a new tab", async ({ page }) => {
  await page.goto("/");

  const externalLinks = page.locator('a[target="_blank"]');
  const count = await externalLinks.count();
  expect(count).toBeGreaterThan(0);

  for (let index = 0; index < count; index += 1) {
    const link = externalLinks.nth(index);
    await expect(link).toHaveAttribute("rel", /noopener/);
  }
});
