import React from "react";
import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import userConfig from "../config/user.config";
import "./globals.css";

const font = Bitter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: userConfig.metaTitle,
  description: userConfig.metaDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#2f5d62" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={userConfig.metaTitle ?? "Linkfolio"}
        />
        <meta
          property="og:description"
          content={userConfig.metaDescription ?? "Linkfolio"}
        />
      </head>

      <body className={font.className}>{children}</body>
    </html>
  );
}
