import { afterEach, describe, expect, it, vi } from "vitest";
import { getScrollOffsetPx, getSiteHeaderHeightPx, scrollToSection } from "@/lib/scroll";

function mockRect(element: HTMLElement, rect: Partial<DOMRect>) {
  element.getBoundingClientRect = () =>
    ({
      height: 0,
      width: 0,
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      toJSON: () => ({}),
      ...rect,
    }) as DOMRect;
}

describe("getSiteHeaderHeightPx", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    document.documentElement.style.removeProperty("font-size");
    document.documentElement.style.removeProperty("--site-header-height");
  });

  it("returns the measured nav height when it exceeds the design token", () => {
    document.documentElement.style.fontSize = "16px";
    document.documentElement.style.setProperty("--site-header-height", "4.25rem");
    document.body.innerHTML = "<header data-site-header><nav></nav></header>";

    const nav = document.querySelector("nav")!;
    mockRect(nav, { height: 80 });

    expect(getSiteHeaderHeightPx()).toBe(80);
  });

  it("falls back to the header height token when no header is rendered", () => {
    document.documentElement.style.fontSize = "16px";
    document.documentElement.style.setProperty("--site-header-height", "4.25rem");

    expect(getSiteHeaderHeightPx()).toBe(68);
  });
});

describe("scrollToSection", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    document.documentElement.style.removeProperty("font-size");
    document.documentElement.style.removeProperty("--site-header-height");
    document.documentElement.style.removeProperty("--scroll-gap");
    vi.restoreAllMocks();
  });

  it("scrolls using a single computed offset", () => {
    document.documentElement.style.fontSize = "16px";
    document.documentElement.style.setProperty("--site-header-height", "4.25rem");
    document.documentElement.style.setProperty("--scroll-gap", "0.75rem");
    document.body.innerHTML = `<header id="about" data-section-heading></header>`;

    const heading = document.getElementById("about")!;
    mockRect(heading, { top: 320 });
    Object.defineProperty(window, "scrollY", { configurable: true, value: 500 });

    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);

    scrollToSection(heading);

    expect(scrollTo).toHaveBeenCalledWith({
      top: 500 + 320 - getScrollOffsetPx(),
      behavior: "smooth",
    });
  });

  it("supports instant scrolling", () => {
    document.documentElement.style.fontSize = "16px";
    document.documentElement.style.setProperty("--site-header-height", "4.25rem");
    document.documentElement.style.setProperty("--scroll-gap", "0.75rem");
    document.body.innerHTML = `<header id="contact" data-section-heading></header>`;

    const heading = document.getElementById("contact")!;
    mockRect(heading, { top: 120 });
    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });

    const scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);

    scrollToSection(heading, "auto");

    expect(scrollTo).toHaveBeenCalledWith({
      top: 120 - getScrollOffsetPx(),
      behavior: "auto",
    });
  });
});
