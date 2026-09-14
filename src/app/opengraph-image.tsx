import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F7F7F9",
          color: "#111114",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, color: "#6b6b73" }}>
          {siteConfig.availability}
        </div>
        <div style={{ fontSize: 64, marginTop: 16, fontFamily: "Georgia" }}>
          {siteConfig.fullName}
        </div>
        <div style={{ fontSize: 32, marginTop: 20, maxWidth: 960 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
