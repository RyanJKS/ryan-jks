"use client";

import { Code2, Network } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/section";
import { fadeInUp } from "@/lib/motion";

export function ContactSection() {
  const reduceMotion = useReducedMotion();
  const { contact } = portfolio;

  return (
    <Section
      id="contact"
      eyebrow={contact.eyebrow}
      title={contact.title}
      memorableLine={contact.memorableLine}
      description={contact.description}
    >
      <motion.div
        className="max-w-3xl"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeInUp}
      >
        <div className="premium-surface rounded-[var(--radius)] p-8 md:p-10">
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary"
            >
              <Network className="h-4 w-4" aria-hidden="true" />
              Say hi on LinkedIn
            </Link>
            <Link
              href={portfolio.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              <Code2 className="h-4 w-4" aria-hidden="true" />
              GitHub
            </Link>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
