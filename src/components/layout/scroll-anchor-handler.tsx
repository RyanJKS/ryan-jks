"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

export function ScrollAnchorHandler() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToCurrentHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = decodeURIComponent(hash.slice(1));
      const section = document.getElementById(id);
      if (!section) return;

      scrollToSection(section, "auto");
    };

    const settleHashScroll = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToCurrentHash);
      });
    };

    settleHashScroll();
    const retryId = window.setTimeout(scrollToCurrentHash, 150);
    window.addEventListener("hashchange", scrollToCurrentHash);
    window.addEventListener("load", scrollToCurrentHash);

    return () => {
      window.clearTimeout(retryId);
      window.removeEventListener("hashchange", scrollToCurrentHash);
      window.removeEventListener("load", scrollToCurrentHash);
    };
  }, []);

  return null;
}
