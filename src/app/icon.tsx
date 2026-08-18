import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "#0f1c2e",
          borderRadius: "50%",
          border: "3px solid #c9a668",
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "#f3ede2",
            letterSpacing: "-1px",
          }}
        >
          DF
        </span>
      </div>
    ),
    { ...size },
  );
}
