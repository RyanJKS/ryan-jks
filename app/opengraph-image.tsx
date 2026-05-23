import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

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
          color: "#f4f0e9",
          background:
            "linear-gradient(115deg, rgba(79, 209, 197, 0.18), transparent 36%), linear-gradient(245deg, rgba(217, 154, 78, 0.18), transparent 42%), linear-gradient(135deg, #0b0d0c, #151815 58%, #0b0d0c)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{profile.name}</div>
          <div
            style={{
              border: "1px solid rgba(244,240,233,0.2)",
              padding: "12px 18px",
              fontSize: 22,
              color: "#88e0d9",
            }}
          >
            Data Platform Engineer
          </div>
        </div>
        <div style={{ display: "flex", gap: 54, alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 740 }}>
            <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 760 }}>
              {profile.headline}
            </div>
            <div style={{ marginTop: 28, fontSize: 26, lineHeight: 1.35, color: "#c7c0b7" }}>
              Enterprise data, AI, cloud, identity, governance, and clean architecture.
            </div>
          </div>
          <div
            style={{
              width: 250,
              height: 250,
              border: "1px solid rgba(244,240,233,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18, width: 150 }}>
              {["UX", "APIs", "Data", "AI"].map((label) => (
                <div
                  key={label}
                  style={{
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(79,209,197,0.44)",
                    color: "#f4f0e9",
                    fontSize: 22,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
