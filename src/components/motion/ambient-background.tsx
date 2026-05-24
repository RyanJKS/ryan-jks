"use client";

import { motion, useReducedMotion } from "framer-motion";
import { glowPulse } from "@/lib/motion";

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <motion.div className="ambient-orb ambient-orb-a" variants={glowPulse} animate="animate" />
      <motion.div
        className="ambient-orb ambient-orb-b"
        variants={glowPulse}
        animate="animate"
        transition={{ delay: 1.2 }}
      />
      <motion.div
        className="ambient-orb ambient-orb-c"
        variants={glowPulse}
        animate="animate"
        transition={{ delay: 2.4 }}
      />
    </div>
  );
}
