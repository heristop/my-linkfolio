import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import userConfig from "../config/user.config";

export const alt = userConfig.fullName ?? "Linkfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const avatarBuffer = readFileSync(
    join(process.cwd(), "public/assets/avatar-og.png"),
  );
  const avatarSrc = `data:image/png;base64,${avatarBuffer.toString("base64")}`;

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
          background: "linear-gradient(160deg, #e6dff0, #f0eaf5)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#fcfbfd",
            borderRadius: 20,
            padding: "48px 64px",
            boxShadow:
              "0 2px 4px rgba(107,82,120,0.04), 0 8px 32px -8px rgba(107,82,120,0.1)",
            border: "1px solid rgba(107,82,120,0.06)",
          }}
        >
          <img
            src={avatarSrc}
            alt=""
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              marginBottom: 24,
              boxShadow:
                "0 0 0 2px rgba(255,255,255,0.9), 0 0 0 3px rgba(165,107,140,0.1), 0 6px 20px -6px rgba(107,82,120,0.2)",
            }}
          />
          <div style={{ fontSize: 48, fontWeight: 700, color: "#3d2e4a" }}>
            {userConfig.fullName}
          </div>
          {userConfig.alias && (
            <div style={{ fontSize: 24, color: "#a56b8c", marginTop: 8 }}>
              {userConfig.alias}
            </div>
          )}
          <div
            style={{
              width: 40,
              height: 2,
              background: "#a56b8c",
              opacity: 0.3,
              marginTop: 20,
              borderRadius: 1,
            }}
          />
          {userConfig.metaDescription && (
            <div
              style={{
                fontSize: 22,
                color: "rgba(61,46,74,0.5)",
                marginTop: 16,
              }}
            >
              {userConfig.metaDescription}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
