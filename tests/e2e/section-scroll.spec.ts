import { expect, test, type Locator, type Page } from "@playwright/test";

const NAV_SECTIONS = [
  { label: "About", id: "about" },
  { label: "Process", id: "process" },
  { label: "Code", id: "code" },
  { label: "Stack", id: "stack" },
  { label: "Connect", id: "contact" },
] as const;

const EXTRA_SECTIONS = [{ label: "Rules", id: "principles" }] as const;

/** Must stay in sync with --scroll-gap in src/app/globals.css */
const MIN_GAP_PX = 12;
const MAX_GAP_PX = 28;
/** Allow sub-pixel rounding during smooth scroll settling */
const SCROLL_TOLERANCE_PX = 1;

/** Matches getSiteHeaderHeightPx() — measures the primary nav bar, not the outer banner shell. */
async function getHeaderBottom(page: Page) {
  return page
    .getByRole("navigation", { name: "Primary" })
    .evaluate((nav) => nav.getBoundingClientRect().bottom);
}

async function getSectionEyebrowTop(heading: Locator) {
  return heading
    .locator("p")
    .first()
    .evaluate((node) => node.getBoundingClientRect().top);
}

async function getSectionTitleTop(heading: Locator) {
  return heading
    .locator("h2")
    .first()
    .evaluate((node) => node.getBoundingClientRect().top);
}

async function waitForScrollSettle(page: Page) {
  let previous = -1;

  for (let attempt = 0; attempt < 40; attempt += 1) {
    const current = await page.evaluate(() => window.scrollY);
    if (current === previous) return;
    previous = current;
    await page.waitForTimeout(100);
  }
}

async function waitForSectionAligned(page: Page, sectionId: string) {
  const heading = page.locator(`#${sectionId}[data-section-heading]`);
  const headerBottom = await getHeaderBottom(page);
  const minTop = headerBottom + MIN_GAP_PX - SCROLL_TOLERANCE_PX;
  const maxTop = headerBottom + MAX_GAP_PX + SCROLL_TOLERANCE_PX;

  for (let attempt = 0; attempt < 30; attempt += 1) {
    const eyebrowTop = await getSectionEyebrowTop(heading);
    if (eyebrowTop >= minTop && eyebrowTop <= maxTop) return;
    await page.waitForTimeout(50);
  }

  await waitForScrollSettle(page);
}

async function expectSectionVisibleBelowHeader(page: Page, sectionId: string) {
  const headerBottom = await getHeaderBottom(page);
  const heading = page.locator(`#${sectionId}[data-section-heading]`);
  await expect(heading).toBeVisible();
  const eyebrowTop = await getSectionEyebrowTop(heading);
  const titleTop = await getSectionTitleTop(heading);

  expect(
    eyebrowTop,
    `#${sectionId} eyebrow should sit below the fixed header (headerBottom=${headerBottom}, eyebrowTop=${eyebrowTop})`,
  ).toBeGreaterThanOrEqual(headerBottom + MIN_GAP_PX - SCROLL_TOLERANCE_PX);

  expect(
    eyebrowTop,
    `#${sectionId} eyebrow should not sit far below the header (headerBottom=${headerBottom}, eyebrowTop=${eyebrowTop})`,
  ).toBeLessThanOrEqual(headerBottom + MAX_GAP_PX + SCROLL_TOLERANCE_PX);

  expect(
    titleTop,
    `#${sectionId} title should not be hidden under the fixed header (headerBottom=${headerBottom}, titleTop=${titleTop})`,
  ).toBeGreaterThanOrEqual(headerBottom + MIN_GAP_PX - SCROLL_TOLERANCE_PX);
}

function desktopNav(page: Page) {
  return page.getByRole("navigation", { name: "Primary" });
}

function mobileNavPanel(page: Page) {
  return page.locator("[data-mobile-nav]");
}

test.describe("section scroll offset", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    });
  });

  test("desktop nav links land with section content below the fixed header", async ({ page }) => {
    test.skip(test.info().project.name !== "chromium-desktop", "Desktop nav is hidden on mobile");

    const nav = desktopNav(page);

    for (const { label, id } of NAV_SECTIONS) {
      await nav.getByRole("link", { name: label, exact: true }).click();
      await waitForSectionAligned(page, id);
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expectSectionVisibleBelowHeader(page, id);
    }
  });

  test("hero and footer links land with section content below the fixed header", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "See my process" }).click();
    await waitForSectionAligned(page, "process");
    await expectSectionVisibleBelowHeader(page, "process");

    await page.getByRole("link", { name: "Browse my code" }).click();
    await waitForSectionAligned(page, "code");
    await expectSectionVisibleBelowHeader(page, "code");

    for (const { label, id } of EXTRA_SECTIONS) {
      await page.getByRole("contentinfo").getByRole("link", { name: label }).click();
      await waitForSectionAligned(page, id);
      await expectSectionVisibleBelowHeader(page, id);
    }

    await page.getByRole("contentinfo").getByRole("link", { name: "Contact" }).click();
    await waitForSectionAligned(page, "contact");
    await expectSectionVisibleBelowHeader(page, "contact");
  });

  test("direct hash navigation respects the fixed header offset", async ({ page }) => {
    for (const { id } of NAV_SECTIONS) {
      await page.goto(`/#${id}`);
      await waitForSectionAligned(page, id);
      await expectSectionVisibleBelowHeader(page, id);
    }
  });

  test("mobile nav links land with section content below the fixed header", async ({ page }) => {
    test.skip(test.info().project.name !== "chromium-mobile", "Mobile nav only");

    for (const { label, id } of NAV_SECTIONS) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await expect(mobileNavPanel(page)).toBeVisible();
      await mobileNavPanel(page).getByRole("link", { name: label, exact: true }).click();
      await waitForSectionAligned(page, id);
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expectSectionVisibleBelowHeader(page, id);
    }
  });
});
