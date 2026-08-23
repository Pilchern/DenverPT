import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 900px 500px at 15% -10%, rgba(201,166,104,0.25), transparent 60%), #0f1c2e",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            height: 100,
            width: 100,
            borderRadius: "50%",
            border: "3px solid #c9a668",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 42, fontWeight: 700, color: "#f3ede2" }}>
            {siteConfig.initials}
          </span>
        </div>
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            color: "#c9a668",
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          CERTIFIED PERSONAL TRAINER
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#f3ede2",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, color: "#f3ede2", marginTop: 16 }}>
          1-on-1 Training · Online Coaching
        </div>
        <div style={{ fontSize: 26, color: "#8493a8", marginTop: 12 }}>
          {siteConfig.locationShort}
        </div>
      </div>
    ),
    { ...size },
  );
}
