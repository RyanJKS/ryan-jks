"use client";

import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes } from "react";
import { scrollToSection } from "@/lib/scroll";

type HashLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  if (typeof href !== "string" || !href.startsWith("#") || href === "#") {
    return <Link href={href} {...props} />;
  }

  return (
    <a
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const id = decodeURIComponent(href.slice(1));
        const section = document.getElementById(id);
        if (!section) return;

        event.preventDefault();
        scrollToSection(section, "auto");
        window.history.pushState(null, "", href);
      }}
      {...props}
    />
  );
}
