import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f5f5f7",
          background:
            "linear-gradient(135deg, #050507 0%, #101013 55%, #0a1628 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 600 }}>{portfolio.fullName}</div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 18,
              color: "#7bc0ff",
            }}
          >
            {portfolio.role}
          </div>
        </div>
        <div style={{ maxWidth: 900 }}>
          <div style={{ fontSize: 56, lineHeight: 1.08, fontWeight: 650, letterSpacing: -1 }}>
            {portfolio.hero.title}
          </div>
          <div style={{ marginTop: 24, fontSize: 22, lineHeight: 1.45, color: "#a8a8af" }}>
            {portfolio.seo.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
