import { describe, expect, it } from "vitest";
import { portfolio } from "@/data/portfolio";
import {
  SECTION_IDS,
  assertValidPortfolio,
  validatePortfolioContent,
} from "@/lib/validate-portfolio";

function portfolioFixture(overrides: Record<string, unknown>) {
  return { ...portfolio, ...overrides } as typeof portfolio;
}

describe("validatePortfolioContent", () => {
  it("passes for the current portfolio content", () => {
    expect(validatePortfolioContent()).toEqual([]);
  });

  it("flags placeholder external links", () => {
    const issues = validatePortfolioContent(
      portfolioFixture({
        links: {
          ...portfolio.links,
          linkedin: "https://linkedin.com/in/YOUR_PROFILE",
        },
      }),
    );

    expect(issues.some((issue) => issue.path === "links.linkedin")).toBe(true);
  });

  it("flags nav links that do not map to known section ids", () => {
    const issues = validatePortfolioContent(
      portfolioFixture({
        nav: [{ label: "Missing", href: "#does-not-exist" }],
      }),
    );

    expect(issues.some((issue) => issue.path === "nav")).toBe(true);
  });

  it("flags duplicate nav links", () => {
    const issues = validatePortfolioContent(
      portfolioFixture({
        nav: [
          { label: "About", href: "#about" },
          { label: "About again", href: "#about" },
        ],
      }),
    );

    expect(issues.some((issue) => issue.message.includes("unique"))).toBe(true);
  });

  it("flags invalid hero CTA targets", () => {
    const issues = validatePortfolioContent(
      portfolioFixture({
        hero: {
          ...portfolio.hero,
          ctas: {
            primary: { label: "External", href: "https://example.com" },
            secondary: { label: "Missing", href: "#missing-section" },
          },
        },
      }),
    );

    expect(issues.filter((issue) => issue.path === "hero.ctas")).toHaveLength(2);
  });

  it("flags duplicate workflow step ids", () => {
    const duplicateSteps = portfolio.workflow.steps.map((step, index) =>
      index === 1 ? { ...step, id: portfolio.workflow.steps[0].id } : step,
    );

    const issues = validatePortfolioContent(
      portfolioFixture({
        workflow: {
          ...portfolio.workflow,
          steps: duplicateSteps,
        },
      }),
    );

    expect(issues.some((issue) => issue.path === "workflow.steps")).toBe(true);
  });

  it("throws when portfolio content is invalid", () => {
    expect(() => assertValidPortfolio(portfolioFixture({ name: "   " }))).toThrow(
      /Portfolio content validation failed/,
    );
  });

  it("documents every section id used by the app", () => {
    expect(SECTION_IDS).toEqual(["about", "process", "principles", "code", "stack", "contact"]);
  });
});
