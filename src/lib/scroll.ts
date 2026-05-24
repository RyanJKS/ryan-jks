import {
  SCROLL_GAP_PX,
  computeScrollOffsetPx,
  getSectionScrollTarget,
  parseLengthPx,
} from "@/lib/scroll-utils";

export { SCROLL_GAP_PX, getSectionScrollTarget, parseLengthPx } from "@/lib/scroll-utils";

export function getSiteHeaderHeightPx(): number {
  const styles = getComputedStyle(document.documentElement);
  const rem = parseFloat(styles.fontSize) || 16;
  const fromToken =
    parseLengthPx(styles.getPropertyValue("--site-header-height"), rem) ?? 4.25 * rem;

  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const nav = header?.querySelector("nav");
  const measured =
    nav?.getBoundingClientRect().height ?? header?.getBoundingClientRect().height ?? 0;

  return Math.max(fromToken, measured);
}

export function getScrollGapPx(): number {
  const styles = getComputedStyle(document.documentElement);
  const rem = parseFloat(styles.fontSize) || 16;
  return parseLengthPx(styles.getPropertyValue("--scroll-gap"), rem) ?? SCROLL_GAP_PX;
}

export function getScrollOffsetPx(): number {
  return computeScrollOffsetPx(getSiteHeaderHeightPx(), getScrollGapPx());
}

export function scrollToSection(element: HTMLElement, behavior: ScrollBehavior = "smooth") {
  const target = getSectionScrollTarget(element);
  const offset = getScrollOffsetPx();

  const applyScroll = () => {
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
    window.scrollTo({ top, behavior });
  };

  applyScroll();

  if (behavior === "auto") {
    requestAnimationFrame(applyScroll);
    return;
  }

  requestAnimationFrame(() => requestAnimationFrame(applyScroll));
}
