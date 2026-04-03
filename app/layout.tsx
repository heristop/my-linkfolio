import React from "react";
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import userConfig from "../config/user.config";
import "./globals.css";

const body = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://heristop.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: userConfig.metaTitle,
  description: userConfig.metaDescription,
  openGraph: {
    type: "website",
    title: userConfig.metaTitle ?? "Linkfolio",
    description: userConfig.metaDescription ?? "Linkfolio",
    siteName: userConfig.fullName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: userConfig.metaTitle ?? "Linkfolio",
    description: userConfig.metaDescription ?? "Linkfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#2f5d62" />
      </head>

      <body className={`${body.variable} ${display.variable} ${body.className}`}>{children}</body>
    </html>
  );
}
