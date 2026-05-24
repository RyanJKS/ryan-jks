import { portfolio } from "@/data/portfolio";

export const SECTION_IDS = ["about", "process", "principles", "code", "stack", "contact"] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export type PortfolioValidationIssue = {
  path: string;
  message: string;
};

export function validatePortfolioContent(
  data: typeof portfolio = portfolio,
): PortfolioValidationIssue[] {
  const issues: PortfolioValidationIssue[] = [];

  const push = (path: string, message: string) => {
    issues.push({ path, message });
  };

  if (!data.name.trim()) push("name", "Name is required.");
  if (!data.fullName.trim()) push("fullName", "Full name is required.");
  if (!data.seo.title.trim()) push("seo.title", "SEO title is required.");
  if (!data.seo.description.trim()) push("seo.description", "SEO description is required.");

  if (!/^https:\/\//.test(data.siteUrl)) {
    push("siteUrl", "Site URL must use HTTPS.");
  }

  for (const [key, url] of Object.entries(data.links)) {
    if (!/^https:\/\//.test(url)) {
      push(`links.${key}`, "External links must use HTTPS.");
    }
    if (/YOUR_PROFILE|example\.com|placeholder/i.test(url)) {
      push(`links.${key}`, "Replace placeholder link URLs before publishing.");
    }
  }

  const navTargets = data.nav.map((item) => item.href.replace("#", ""));
  for (const href of navTargets) {
    if (!SECTION_IDS.includes(href as SectionId)) {
      push("nav", `Nav target "#${href}" is not a known section id.`);
    }
  }

  const uniqueNavHrefs = new Set(navTargets);
  if (uniqueNavHrefs.size !== navTargets.length) {
    push("nav", "Nav links must be unique.");
  }

  for (const cta of [data.hero.ctas.primary, data.hero.ctas.secondary]) {
    if (!cta.href.startsWith("#")) {
      push("hero.ctas", `CTA "${cta.label}" must use an in-page hash link.`);
      continue;
    }
    const target = cta.href.slice(1);
    if (!SECTION_IDS.includes(target as SectionId)) {
      push("hero.ctas", `CTA "${cta.label}" points to unknown section "#${target}".`);
    }
  }

  for (const word of data.hero.kinetic.words) {
    if (!word.trim()) {
      push("hero.kinetic.words", "Hero kinetic words cannot be empty.");
      break;
    }
  }

  const workflowIds = data.workflow.steps.map((step) => step.id);
  if (new Set(workflowIds).size !== workflowIds.length) {
    push("workflow.steps", "Workflow step ids must be unique.");
  }

  return issues;
}

export function assertValidPortfolio(data: typeof portfolio = portfolio): void {
  const issues = validatePortfolioContent(data);
  if (issues.length > 0) {
    const details = issues.map((issue) => `- ${issue.path}: ${issue.message}`).join("\n");
    throw new Error(`Portfolio content validation failed:\n${details}`);
  }
}
