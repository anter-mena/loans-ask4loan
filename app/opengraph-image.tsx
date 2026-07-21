import { ImageResponse } from "next/og";

export const alt = "Ask4Loan — Quick & Easy Personal Loans in Canada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1220",
          padding: "72px 80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 10, background: "#10B981" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 46, height: 46, borderRadius: 12, background: "#10B981" }} />
          <span style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1 }}>Ask4Loan</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 5, color: "#5fd6a3" }}>
            PERSONAL LOANS · CANADA
          </span>
          <span style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000, letterSpacing: -1.5 }}>
            Quick &amp; easy personal loans in Canada.
          </span>
        </div>

        <span style={{ fontSize: 24, color: "rgba(255,255,255,0.55)" }}>ask4loan.ca</span>
      </div>
    ),
    { ...size },
  );
}
