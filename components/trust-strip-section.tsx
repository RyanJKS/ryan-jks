import { Activity, BadgeCheck, Braces, LockKeyhole, ScanSearch } from "lucide-react";
import { Reveal } from "@/components/motion";

const signals = [
  {
    label: "Architecture",
    value: "Clear boundaries",
    icon: Braces,
  },
  {
    label: "Security",
    value: "Identity first",
    icon: LockKeyhole,
  },
  {
    label: "Operations",
    value: "Visible runtime",
    icon: Activity,
  },
  {
    label: "Governance",
    value: "Auditable change",
    icon: BadgeCheck,
  },
  {
    label: "AI readiness",
    value: "Trusted retrieval",
    icon: ScanSearch,
  },
];

export function TrustStripSection() {
  return (
    <Reveal as="section" className="section-container pb-12">
      <div className="surface-quiet grid gap-px overflow-hidden rounded-[28px] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-5">
        {signals.map((signal) => {
          const Icon = signal.icon;

          return (
            <div key={signal.label} className="bg-[color:var(--panel-solid)]/80 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--accent)]">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold">{signal.label}</p>
              </div>
              <p className="mt-2 text-sm font-semibold text-[color:var(--muted)]">{signal.value}</p>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
