"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/section";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const { about } = portfolio;

  return (
    <Section
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.description}
      memorableLine={about.memorableLine}
    >
      <motion.div
        className="grid max-w-3xl gap-5"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {about.paragraphs.map((paragraph) => (
          <motion.p
            key={paragraph.slice(0, 32)}
            variants={fadeInUp}
            className="text-base leading-8 text-pretty text-[color:var(--muted)] md:text-lg"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </Section>
  );
}
