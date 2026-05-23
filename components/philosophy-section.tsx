import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
const methods = [
  {
    title: "Reduce",
    body: "Find the real constraint.",
  },
  {
    title: "Map",
    body: "Connect users, data, identity, ops.",
  },
  {
    title: "Shape",
    body: "Choose the smallest durable abstraction.",
  },
  {
    title: "Harden",
    body: "Design for failure, cost, and ownership.",
  },
  {
    title: "Clarify",
    body: "Make the system hard to misunderstand.",
  },
];

export function PhilosophySection() {
  return (
    <Reveal as="section" id="thinking" className="section-container py-24">
      <div className="grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
        <SectionHeading
          eyebrow="Thinking lens"
          title="Start from the constraint,"
          accent="then reduce the noise."
          body="The work is turning messy platform pressure into something clear enough to build, operate, and explain."
        />
        <div className="premium-surface rounded-[28px] p-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-1">
            {methods.map((method, index) => (
              <article
                key={method.title}
                className="relative z-10 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4 backdrop-blur-xl"
              >
                <div className="text-xs font-semibold text-[color:var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{method.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{method.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
