"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionCard({ children, className, delay = 0 }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("h-full", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }
      }
    >
      {children}
    </motion.div>
  );
}
