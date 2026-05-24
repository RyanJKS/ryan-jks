"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function CodeSection() {
  const reduceMotion = useReducedMotion();
  const { code } = portfolio;

  return (
    <Section
      id="code"
      eyebrow={code.eyebrow}
      title={code.title}
      memorableLine={code.memorableLine}
      description={code.description}
    >
      <motion.div
        className="max-w-3xl"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          variants={fadeInUp}
          className="premium-surface rounded-[var(--radius)] p-8 md:p-10"
        >
          <div className="relative z-10">
            <ul className="space-y-3">
              {code.highlights.map((item, index) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-[color:var(--muted)] md:text-base"
                  initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <Code2
                    className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent-strong)]"
                    aria-hidden="true"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.div className="mt-8" variants={fadeInUp}>
              <Link
                href={code.reposUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary"
              >
                Browse repositories
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
