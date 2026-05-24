"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const WORD_INTERVAL_MS = 2600;

export function KineticHeadline() {
  const { kinetic } = portfolio.hero;
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const words = kinetic.words;
  const activeWord = words[reduceMotion ? 0 : active];

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % words.length);
    }, WORD_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [reduceMotion, words.length]);

  return (
    <h1 className="mt-4 text-balance" aria-live="polite">
      <span className="block text-xl font-medium tracking-[-0.02em] text-[color:var(--muted)] md:text-2xl">
        {kinetic.prefix}
      </span>

      <span className="relative mt-2 block overflow-hidden md:mt-3">
        <span className="invisible block text-5xl leading-[1.02] font-semibold tracking-[-0.04em] md:text-7xl lg:text-[5.5rem] lg:leading-[0.98]">
          {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
        </span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={activeWord}
            className="absolute inset-0 flex items-center bg-gradient-to-r from-[color:var(--accent-strong)] via-[color:var(--signal)] to-[color:var(--accent)] bg-clip-text text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-transparent md:text-7xl lg:text-[5.5rem] lg:leading-[0.98]"
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeWord}
          </motion.span>
        </AnimatePresence>
      </span>

      <span className="mt-2 block text-2xl leading-tight font-semibold tracking-[-0.03em] text-[color:var(--foreground)] md:mt-3 md:text-4xl lg:text-[2.75rem]">
        {kinetic.suffix}
      </span>
    </h1>
  );
}
