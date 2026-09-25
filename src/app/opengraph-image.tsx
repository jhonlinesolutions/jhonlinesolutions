import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoMark = await readFile(
    join(process.cwd(), "public/brand/logo-mark.png"),
    "base64"
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#05070d",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(91,108,240,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(34,193,209,0.28), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={`data:image/png;base64,${logoMark}`}
            width={65}
            height={56}
          />
          <div style={{ display: "flex", fontSize: 30, color: "white", fontWeight: 700 }}>
            JH Online Solutions
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              lineHeight: 1.15,
              fontWeight: 700,
              color: "white",
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#b8bfcc", maxWidth: 780 }}>
            Consultoria em TI, software sob medida e soluções em nuvem.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
