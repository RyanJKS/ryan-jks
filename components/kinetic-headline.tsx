"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const words = ["data", "AI", "cloud", "governance"];

export function KineticHeadline() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const headlineWords = useMemo(() => words, []);

  useEffect(() => {
    if (reduced) {
      return;
    }

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % headlineWords.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [headlineWords.length, reduced]);

  return (
    <h1 className="mt-6 max-w-6xl text-5xl font-semibold leading-[0.98] text-balance md:text-7xl lg:text-8xl">
      Where{" "}
      <span className="relative inline-flex min-w-[11ch] overflow-hidden align-bottom bg-gradient-to-r from-[color:var(--accent-strong)] via-[color:var(--signal)] to-[color:var(--accent)] bg-clip-text text-transparent">
        {headlineWords.map((word, index) => (
          <motion.span
            key={word}
            className={index === 0 ? "relative" : "absolute left-0 top-0"}
            initial={false}
            animate={
              reduced || active === index
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: active > index ? -42 : 42, filter: "blur(6px)" }
            }
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </span>{" "}
      turns into platform advantage.
    </h1>
  );
}
