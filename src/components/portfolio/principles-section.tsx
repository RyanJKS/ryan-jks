"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/section";
import { MotionCard } from "@/components/motion/motion-card";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function PrinciplesSection() {
  const reduceMotion = useReducedMotion();
  const { principles } = portfolio;

  return (
    <Section
      id="principles"
      eyebrow={principles.eyebrow}
      title={principles.title}
      memorableLine={principles.memorableLine}
    >
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={staggerContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {principles.items.map((principle, index) => (
          <motion.div key={principle.title} variants={fadeInUp}>
            <MotionCard delay={index * 0.05}>
              <Card interactive className="h-full">
                <CardHeader>
                  <CardTitle>{principle.title}</CardTitle>
                  <CardDescription className="text-base">{principle.description}</CardDescription>
                </CardHeader>
              </Card>
            </MotionCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
