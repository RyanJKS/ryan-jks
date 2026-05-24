"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function StackSection() {
  const reduceMotion = useReducedMotion();
  const { stack } = portfolio;

  return (
    <Section
      id="stack"
      eyebrow={stack.eyebrow}
      title={stack.title}
      memorableLine={stack.memorableLine}
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {stack.categories.map((category) => (
          <motion.div
            key={category.name}
            variants={fadeInUp}
            className="premium-card rounded-[var(--radius-sm)] p-6"
          >
            <h3 className="relative z-10 text-sm font-semibold tracking-[0.16em] text-[color:var(--accent-strong)] uppercase">
              {category.name}
            </h3>
            <div className="relative z-10 mt-5 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
