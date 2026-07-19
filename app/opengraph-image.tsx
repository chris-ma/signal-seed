import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B1B1B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "#F6F4EF",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative", width: 30, height: 30, display: "flex" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "3px solid #F6F4EF",
                borderRadius: "50%",
              }}
            />
          </div>
          <span style={{ fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>
            Signal Seed
          </span>
        </div>
        <div style={{ marginTop: 48, fontSize: 64, maxWidth: 900, lineHeight: 1.1, display: "flex" }}>
          From ideation to validation.
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            maxWidth: 760,
            color: "rgba(246,244,239,0.7)",
            display: "flex",
          }}
        >
          All the tools you need to turn uncertainty into opportunity.
        </div>
      </div>
    ),
    { ...size },
  );
}
