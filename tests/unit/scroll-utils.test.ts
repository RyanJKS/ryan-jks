import { describe, expect, it } from "vitest";
import {
  computeScrollOffsetPx,
  getSectionScrollTarget,
  parseLengthPx,
  SCROLL_GAP_PX,
} from "@/lib/scroll-utils";

describe("parseLengthPx", () => {
  it("parses rem values using the document root font size", () => {
    expect(parseLengthPx("4.25rem", 16)).toBe(68);
  });

  it("parses px values", () => {
    expect(parseLengthPx("72px", 16)).toBe(72);
  });

  it("returns null for unsupported units", () => {
    expect(parseLengthPx("50%", 16)).toBeNull();
    expect(parseLengthPx("", 16)).toBeNull();
  });
});

describe("computeScrollOffsetPx", () => {
  it("adds the configured scroll gap to the header height", () => {
    expect(computeScrollOffsetPx(68)).toBe(68 + SCROLL_GAP_PX);
  });
});

describe("getSectionScrollTarget", () => {
  it("returns the heading when the element is already a section heading", () => {
    document.body.innerHTML = `<header id="about" data-section-heading><p>About</p></header>`;
    const heading = document.getElementById("about")!;
    expect(getSectionScrollTarget(heading)).toBe(heading);
  });

  it("finds the nested heading inside a section container", () => {
    document.body.innerHTML = `
      <section>
        <header data-section-heading><p>Process</p></header>
      </section>
    `;
    const section = document.querySelector("section")!;
    const heading = section.querySelector("[data-section-heading]")!;
    expect(getSectionScrollTarget(section)).toBe(heading);
  });
});
