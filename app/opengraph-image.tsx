import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import userConfig from "~/user.config";

export const alt = userConfig.fullName ?? "Linkfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Defensively strip emoji: satori's font fallback can't shape them, so they'd
// render as tofu boxes in the generated image.
const description = userConfig.metaDescription
  ?.replaceAll(/\p{Emoji_Presentation}/gu, "")
  .trim();

export default function OGImage() {
  const avatarBuffer = readFileSync(
    join(process.cwd(), "public/assets/avatar-og.png"),
  );
  const avatarSrc = `data:image/png;base64,${avatarBuffer.toString("base64")}`;
  const primary = userConfig.themeColor ?? "#c8a8d4";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #1a1424, #1e1829)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#261e30",
          borderRadius: 20,
          padding: "48px 64px",
          border: "1px solid rgba(200,168,212,0.08)",
        }}
      >
        {/* next/image is unusable here: satori renders this tree, not the DOM. */}
        {/* oxlint-disable-next-line no-img-element */}
        <img
          src={avatarSrc}
          alt=""
          width={120}
          height={120}
          style={{
            borderRadius: "50%",
            marginBottom: 24,
            boxShadow:
              "0 0 0 2px rgba(38,30,48,0.9), 0 0 0 3px rgba(200,168,212,0.15), 0 6px 20px -6px rgba(0,0,0,0.4)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 700,
            color: "#e0d0ea",
          }}
        >
          {userConfig.fullName}
        </div>
        {userConfig.alias && (
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#d4a0be",
              marginTop: 8,
            }}
          >
            {userConfig.alias}
          </div>
        )}
        <div
          style={{
            width: 40,
            height: 2,
            background: primary,
            opacity: 0.5,
            marginTop: 20,
            borderRadius: 1,
          }}
        />
        {description && (
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(224,208,234,0.7)",
              marginTop: 16,
              maxWidth: 800,
              textAlign: "center",
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>,
    { ...size },
  );
}
