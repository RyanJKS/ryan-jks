"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, BrainCircuit, Cloud, DatabaseZap, KeyRound, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const nodes = [
  { label: "UX", detail: "portal", x: "9%", y: "18%", icon: Workflow },
  { label: "Identity", detail: "Entra", x: "62%", y: "10%", icon: KeyRound },
  { label: "APIs", detail: "domain", x: "25%", y: "42%", icon: BrainCircuit },
  { label: "Data", detail: "governed", x: "70%", y: "45%", icon: DatabaseZap },
  { label: "Cloud", detail: "runtime", x: "18%", y: "72%", icon: Cloud },
  { label: "Ops", detail: "signals", x: "66%", y: "76%", icon: Activity },
];

const paths = [
  "M120 108 C250 70 335 86 460 92",
  "M160 260 C250 214 356 210 512 246",
  "M505 250 C484 334 448 391 392 418",
  "M240 404 C252 330 274 292 335 255",
  "M330 255 C394 190 442 142 506 92",
];

export function HeroSystemGraph() {
  const reduced = useReducedMotion();

  return (
    <div className="premium-surface relative min-h-[620px] rounded-[32px] p-5 lg:min-h-[680px]">
      <div className="absolute inset-4 rounded-[26px] border border-[color:var(--border)] bg-[color:var(--panel-solid)]/28" />
      <div className="absolute inset-x-12 top-5 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/18" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <Badge>Live system map</Badge>
          <p className="mt-3 max-w-[20rem] text-sm leading-6 text-[color:var(--muted)]">
            A product-grade view of how platform layers connect without making the operating model
            heavier.
          </p>
        </div>
        <div className="rounded-full border border-[color:var(--border)] bg-[color:var(--panel-strong)] px-4 py-2 text-xs font-semibold text-[color:var(--muted)] shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          06 connected layers
        </div>
      </div>

      <svg className="absolute inset-0 h-full w-full" role="presentation" viewBox="0 0 640 600">
        <defs>
          <linearGradient id="systemPulse" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {paths.map((path, index) => (
          <g key={path}>
            <path d={path} fill="none" stroke="var(--border)" strokeWidth="1.2" />
            <motion.path
              d={path}
              fill="none"
              stroke="url(#systemPulse)"
              strokeLinecap="round"
              strokeWidth="2.2"
              pathLength="1"
              initial={reduced ? false : { pathOffset: 1 }}
              animate={reduced ? undefined : { pathOffset: [1, 0, -1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 0.7,
                ease: "linear",
                delay: index * 0.28,
              }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-0">
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.label}
              className="absolute w-[132px] rounded-[18px] border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl"
              style={{ left: node.x, top: node.y }}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: index * 0.07 }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent)]/12 text-[color:var(--accent)]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{node.label}</p>
                  <p className="text-xs text-[color:var(--muted)]">{node.detail}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
        {["constraint", "contract", "operation"].map((item) => (
          <div
            key={item}
            className="rounded-full border border-[color:var(--border)] bg-[color:var(--background)]/70 px-3 py-2 text-center text-xs font-semibold uppercase text-[color:var(--muted)] backdrop-blur-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
