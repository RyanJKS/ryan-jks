"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { KineticHeadline } from "@/components/portfolio/kinetic-headline";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, floatLoop, heroStagger, scaleIn } from "@/lib/motion";

const layers = [
  { label: "First principles", detail: "Strip ideas down to the roots" },
  { label: "Mental graph", detail: "Link patterns across domains" },
  { label: "Structure", detail: "Ambiguity → architecture → code" },
  { label: "Systems", detail: "Machines, software, platforms" },
];

function HeroSystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="premium-surface relative overflow-hidden rounded-[var(--radius)] p-6 md:p-8"
      variants={scaleIn}
      initial={reduceMotion ? false : { opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[color:var(--accent)]/20 blur-3xl"
        variants={floatLoop}
        animate={reduceMotion ? undefined : "animate"}
      />

      <div className="relative z-10">
        <p className="text-xs font-semibold tracking-[0.18em] text-[color:var(--muted)] uppercase">
          How I connect ideas
        </p>

        <div className="relative mt-8 space-y-3">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.label}
              className="relative flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--panel)] px-4 py-3"
              initial={reduceMotion ? false : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.55 + index * 0.1,
                duration: 0.48,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { x: 6 }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)]/15 text-xs font-semibold text-[color:var(--accent-strong)]">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-[color:var(--foreground)]">{layer.label}</p>
                <p className="text-xs text-[color:var(--muted)]">{layer.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { hero } = portfolio;

  return (
    <section className="hero-container relative min-h-[calc(100vh-4.25rem)] pt-14 pb-24 md:pt-20 md:pb-32">
      <motion.div
        className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
        variants={heroStagger}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.div variants={fadeInUp}>
            <Badge variant="signal">{portfolio.roleSubtitle}</Badge>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-base font-medium text-[color:var(--accent-strong)] md:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <KineticHeadline />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-xl text-base leading-8 text-pretty text-[color:var(--muted)] md:text-lg"
          >
            {hero.supportingLine}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={hero.ctas.primary.href} className="btn-primary">
              {hero.ctas.primary.label}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href={hero.ctas.secondary.href} className="btn-secondary">
              {hero.ctas.secondary.label}
            </Link>
          </motion.div>
        </div>

        <HeroSystemVisual />
      </motion.div>
    </section>
  );
}
