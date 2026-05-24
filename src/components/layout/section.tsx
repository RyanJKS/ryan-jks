"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  memorableLine?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  memorableLine,
  description,
  className,
  children,
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={cn("scroll-mt-24 py-24 md:py-32", className)}>
      <div className="section-container">
        <motion.header
          className="max-w-3xl"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] text-[color:var(--foreground)] md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-pretty text-base leading-8 text-[color:var(--muted)] md:text-lg">
              {description}
            </p>
          ) : null}
          {memorableLine ? (
            <p className="mt-5 border-l-2 border-[color:var(--accent)]/40 pl-4 text-pretty text-sm leading-7 text-[color:var(--foreground)]/85 italic md:text-base">
              {memorableLine}
            </p>
          ) : null}
        </motion.header>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
