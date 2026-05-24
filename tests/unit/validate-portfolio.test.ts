import { describe, expect, it } from "vitest";
import { portfolio } from "@/data/portfolio";
import {
  SECTION_IDS,
  assertValidPortfolio,
  validatePortfolioContent,
} from "@/lib/validate-portfolio";

describe("validatePortfolioContent", () => {
  it("passes for the current portfolio content", () => {
    expect(validatePortfolioContent()).toEqual([]);
  });

  it("flags placeholder external links", () => {
    const issues = validatePortfolioContent({
      ...portfolio,
      links: {
        ...portfolio.links,
        linkedin: "https://linkedin.com/in/YOUR_PROFILE",
      },
    });

    expect(issues.some((issue) => issue.path === "links.linkedin")).toBe(true);
  });

  it("flags nav links that do not map to known section ids", () => {
    const issues = validatePortfolioContent({
      ...portfolio,
      nav: [{ label: "Missing", href: "#does-not-exist" }],
    });

    expect(issues.some((issue) => issue.path === "nav")).toBe(true);
  });

  it("flags duplicate nav links", () => {
    const issues = validatePortfolioContent({
      ...portfolio,
      nav: [
        { label: "About", href: "#about" },
        { label: "About again", href: "#about" },
      ],
    });

    expect(issues.some((issue) => issue.message.includes("unique"))).toBe(true);
  });

  it("flags invalid hero CTA targets", () => {
    const issues = validatePortfolioContent({
      ...portfolio,
      hero: {
        ...portfolio.hero,
        ctas: {
          primary: { label: "External", href: "https://example.com" },
          secondary: { label: "Missing", href: "#missing-section" },
        },
      },
    });

    expect(issues.filter((issue) => issue.path === "hero.ctas")).toHaveLength(2);
  });

  it("flags duplicate workflow step ids", () => {
    const [firstStep, ...rest] = portfolio.workflow.steps;
    const issues = validatePortfolioContent({
      ...portfolio,
      workflow: {
        ...portfolio.workflow,
        steps: [firstStep, { ...firstStep, title: "Duplicate id" }, ...rest],
      },
    });

    expect(issues.some((issue) => issue.path === "workflow.steps")).toBe(true);
  });

  it("throws when portfolio content is invalid", () => {
    expect(() =>
      assertValidPortfolio({
        ...portfolio,
        name: "   ",
      }),
    ).toThrow(/Portfolio content validation failed/);
  });

  it("documents every section id used by the app", () => {
    expect(SECTION_IDS).toEqual(["about", "process", "principles", "code", "stack", "contact"]);
  });
});
