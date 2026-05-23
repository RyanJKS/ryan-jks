"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { capabilities } from "@/content/capabilities";

export function CapabilitySection() {
  const [active, setActive] = useState(capabilities[0].title);
  const activeCapability = useMemo(
    () => capabilities.find((capability) => capability.title === active) ?? capabilities[0],
    [active],
  );
  const Icon = activeCapability.icon;

  return (
    <Reveal as="section" id="capabilities" className="section-container py-24">
      <SectionHeading
        eyebrow="Platform range"
        title="A broad stack, held with"
        accent="product discipline."
        body="Pick a layer and the interface tightens around the judgement behind it."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">
        <div className="grid gap-2" role="tablist" aria-label="Platform capability areas">
          {capabilities.map((capability) => {
            const CapabilityIcon = capability.icon;
            const selected = capability.title === active;
            return (
              <button
                key={capability.title}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="capability-panel"
                onClick={() => setActive(capability.title)}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-[20px] border p-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] ${
                  selected
                    ? "border-[color:var(--accent)]/55 bg-[color:var(--accent)]/10 shadow-[0_14px_38px_rgba(0,0,0,0.08)]"
                    : "border-[color:var(--border)] bg-[color:var(--panel)] hover:border-[color:var(--accent)]/45 hover:bg-[color:var(--panel-strong)]"
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
                  <CapabilityIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold">{capability.title}</span>
                  <span className="mt-1 block text-sm text-[color:var(--muted)]">
                    {capability.skills.length} signals
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <div id="capability-panel" role="tabpanel" className="premium-card rounded-[28px] p-6">
          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
                <Icon className="h-5 w-5 text-[color:var(--accent)]" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{activeCapability.title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-[color:var(--muted)]">
                {activeCapability.description}
              </p>
            </div>
            <Badge variant="signal">Active lens</Badge>
          </div>
          <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-3">
            {["Design", "Build", "Run"].map((step) => (
              <div
                key={step}
                className="rounded-[18px] border border-[color:var(--border)] bg-[color:var(--panel)] p-3"
              >
                <p className="text-xs font-semibold uppercase text-[color:var(--muted)]">{step}</p>
                <p className="mt-2 text-sm font-semibold">
                  {step === "Design"
                    ? "Reason from constraints"
                    : step === "Build"
                      ? "Ship with clean contracts"
                      : "Instrument and govern"}
                </p>
              </div>
            ))}
          </div>
          <div className="relative z-10 mt-8 grid gap-2 sm:grid-cols-2">
            {activeCapability.skills.slice(0, 8).map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-sm font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
