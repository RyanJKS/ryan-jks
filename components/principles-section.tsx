import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const principles = [
  {
    title: "Constraint before tool",
    body: "Problem shape first.",
  },
  {
    title: "Explainable architecture",
    body: "No mystery boxes.",
  },
  {
    title: "Governance is UX",
    body: "Policy should feel designed.",
  },
  {
    title: "DX compounds",
    body: "Good paths become defaults.",
  },
  {
    title: "Observable by design",
    body: "Runtime is a product surface.",
  },
  {
    title: "Abstractions must earn rent",
    body: "Less cognitive load.",
  },
  {
    title: "Today, with a path",
    body: "Pragmatic now. Evolvable later.",
  },
];

export function PrinciplesSection() {
  return (
    <Reveal as="section" className="section-container py-24">
      <SectionHeading
        eyebrow="Rules of taste"
        title="Small standards make systems"
        accent="feel expensive."
        body="Professional does not have to mean sterile. It means the details hold."
      />
      <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-7">
        {principles.map((principle, index) => (
          <article key={principle.title} className="premium-card rounded-[24px] p-5">
            <p className="text-xs font-semibold text-[color:var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-base font-semibold leading-snug">{principle.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{principle.body}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
