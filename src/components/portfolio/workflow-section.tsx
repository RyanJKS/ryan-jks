"use client";

import { useState } from "react";
import {
  Box,
  GitBranch,
  Hammer,
  Network,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

const stepIcons: Record<string, LucideIcon> = {
  messy: Target,
  principles: Box,
  graph: Network,
  path: GitBranch,
  build: Sparkles,
  boring: Hammer,
};

export function WorkflowSection() {
  const { workflow } = portfolio;
  const [activeId, setActiveId] = useState<string>(workflow.steps[0].id);
  const reduceMotion = useReducedMotion();

  const activeIndex = workflow.steps.findIndex((step) => step.id === activeId);
  const activeStep = workflow.steps[activeIndex] ?? workflow.steps[0];

  return (
    <Section
      id="process"
      eyebrow={workflow.eyebrow}
      title={workflow.title}
      description={workflow.description}
      memorableLine={workflow.memorableLine}
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
        <div className="relative">
          <div
            className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-[color:var(--border)]"
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-[1.15rem] w-px origin-top bg-[color:var(--accent)]"
            aria-hidden="true"
            initial={false}
            animate={{
              height: `${(activeIndex / Math.max(workflow.steps.length - 1, 1)) * 100}%`,
            }}
            style={{ top: "1rem" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />

          <ul className="relative space-y-2">
            {workflow.steps.map((step, index) => {
              const Icon = stepIcons[step.id] ?? Box;
              const isActive = step.id === activeId;

              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(step.id)}
                    className={cn(
                      "group flex w-full items-start gap-4 rounded-2xl px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]",
                      isActive
                        ? "bg-[color:var(--panel-strong)]"
                        : "hover:bg-[color:var(--panel)]",
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition",
                        isActive
                          ? "border-[color:var(--accent)] bg-[color:var(--accent)]/15 text-[color:var(--accent-strong)]"
                          : "border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--muted)] group-hover:border-[color:var(--accent)]/40",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span className="flex items-center gap-2">
                        <Icon
                          className={cn(
                            "h-3.5 w-3.5",
                            isActive
                              ? "text-[color:var(--accent-strong)]"
                              : "text-[color:var(--muted)]",
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={cn(
                            "text-xs font-semibold uppercase tracking-[0.14em]",
                            isActive
                              ? "text-[color:var(--accent-strong)]"
                              : "text-[color:var(--muted)]",
                          )}
                        >
                          {step.tag}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-sm font-semibold md:text-base",
                          isActive
                            ? "text-[color:var(--foreground)]"
                            : "text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]",
                        )}
                      >
                        {step.title}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          className="premium-surface min-h-[280px] rounded-[var(--radius)] p-6 md:p-8 lg:min-h-[360px]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative z-10 flex h-full flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  Step {String(activeIndex + 1).padStart(2, "0")} · {activeStep.tag}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[color:var(--foreground)] md:text-3xl">
                  {activeStep.title}
                </h3>
                <p className="mt-4 max-w-lg text-pretty text-base leading-8 text-[color:var(--muted)]">
                  {activeStep.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex flex-wrap gap-2">
              {workflow.steps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]",
                    step.id === activeId
                      ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                      : "border border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
                  )}
                  aria-label={`Go to step ${index + 1}: ${step.title}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
