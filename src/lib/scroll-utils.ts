export const SCROLL_GAP_PX = 12;

export function parseLengthPx(value: string, remSize: number): number | null {
  const token = value.trim();
  if (!token) return null;
  if (token.endsWith("rem")) return parseFloat(token) * remSize;
  if (token.endsWith("px")) return parseFloat(token);
  return null;
}

export function computeScrollOffsetPx(headerHeightPx: number, gapPx = SCROLL_GAP_PX): number {
  return headerHeightPx + gapPx;
}

export function getSectionScrollTarget(section: HTMLElement): HTMLElement {
  if (section.matches("[data-section-heading]")) return section;

  return (
    section.querySelector<HTMLElement>("[data-section-heading]") ??
    section.querySelector<HTMLElement>("header") ??
    section
  );
}
