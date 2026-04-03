import { ImageResponse } from "next/og";
import userConfig from "../config/user.config";

export const alt = userConfig.fullName ?? "Linkfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          background: "linear-gradient(135deg, #2f5d62 0%, #1a3a3d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>
          {userConfig.fullName}
        </div>
        {userConfig.alias && (
          <div style={{ fontSize: 32, opacity: 0.7, marginTop: 12 }}>
            {userConfig.alias}
          </div>
        )}
        {userConfig.metaDescription && (
          <div style={{ fontSize: 28, opacity: 0.5, marginTop: 24 }}>
            {userConfig.metaDescription}
          </div>
        )}
      </div>
    ),
    { ...size },
  );
}
