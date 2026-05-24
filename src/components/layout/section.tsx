"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/motion";

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
    <section className={cn("py-16 md:py-24", className)}>
      <div className="section-container">
        <motion.header
          id={id}
          data-section-heading
          className="max-w-3xl"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-[color:var(--accent-strong)] uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-balance text-[color:var(--foreground)] md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-pretty text-[color:var(--muted)] md:text-lg">
              {description}
            </p>
          ) : null}
          {memorableLine ? (
            <p className="mt-5 border-l-2 border-[color:var(--accent)]/40 pl-4 text-sm leading-7 text-pretty text-[color:var(--foreground)]/85 italic md:text-base">
              {memorableLine}
            </p>
          ) : null}
        </motion.header>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
