import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B1B1B",
        }}
      >
        <div style={{ position: "relative", width: 18, height: 18, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "2px solid #F6F4EF",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 8,
              top: -6,
              width: 2,
              height: 7,
              background: "#F6F4EF",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 6.5,
              top: -9,
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#F6F4EF",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
