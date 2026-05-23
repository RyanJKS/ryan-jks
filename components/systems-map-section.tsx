import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const layers = [
  ["User experience", "Clear workflows and polished platform surfaces"],
  ["Identity and access", "Entra ID, PKCE, groups, roles, least privilege"],
  ["APIs and domain logic", "Clean contracts, use cases, versioned boundaries"],
  ["Data and analytics", "Pipelines, discovery, quality, platform usage"],
  ["AI and retrieval", "Search, grounding, trusted knowledge, evaluation"],
  ["Infrastructure and DevOps", "Azure, IaC, CI/CD, secure runtime config"],
  ["Observability and operations", "Logs, traces, alerts, ownership, cost"],
  ["Governance and security", "Policy, auditability, access workflows"],
];

export function SystemsMapSection() {
  return (
    <Reveal as="section" id="systems" className="section-container py-24">
      <div className="grid gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
        <SectionHeading
          eyebrow="System atlas"
          title="The premium work happens"
          accent="between the boxes."
          body="UX, identity, APIs, data, AI, cloud, operations, and governance feel better when they are designed as one experience."
        />
        <div className="premium-surface relative rounded-[28px] p-4">
          <div className="relative z-10 mb-4 rounded-[22px] border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/10 p-4">
            <p className="text-sm font-semibold">Platform judgement layer</p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
              Every layer has to be designed with the others in mind, otherwise the platform
              becomes a pile of locally reasonable decisions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {layers.map(([layer, detail], index) => (
              <div
                key={layer}
                className="relative z-10 min-h-28 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4 backdrop-blur-xl"
              >
                <span className="absolute right-3 top-3 text-xs text-[color:var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="block max-w-[12rem] font-semibold leading-snug">{layer}</span>
                <span className="mt-3 block max-w-[18rem] text-sm leading-6 text-[color:var(--muted)]">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
