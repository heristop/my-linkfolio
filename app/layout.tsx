import React from "react";
import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Serif_Display } from "next/font/google";
import { Analytics, ThemeProvider } from "linkfolio";
import { CloudflareAdapter } from "~/CloudflareAdapter";
import userConfig from "~/user.config";
import { siteUrl } from "~/site";
import "./globals.css";

const body = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e6dff0" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1424" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: userConfig.metaTitle,
  description: userConfig.metaDescription,
  ...(userConfig.keywords ? { keywords: userConfig.keywords } : {}),
  openGraph: {
    type: "website",
    title: userConfig.metaTitle ?? "Linkfolio",
    description: userConfig.metaDescription ?? "Linkfolio",
    url: siteUrl,
    siteName: userConfig.fullName,
    locale: userConfig.locale ?? "en_US",
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
  manifest: "/site.webmanifest",
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
    // `display.variable` sits on <html>, not <body>: the theme declares
    // --lf-name-font-family on :root, and a var() inside a custom property is
    // substituted where it is declared. With the font variable one level
    // lower the lookup fails there and the whole declaration goes invalid.
    <html
      lang={userConfig.lang ?? "en"}
      className={display.variable}
      suppressHydrationWarning
    >
      <body className={body.className}>
        <ThemeProvider>{children}</ThemeProvider>
        {/* Before <Analytics>: it resolves the adapter as it renders, and
            Cloudflare is not one the package ships. */}
        <CloudflareAdapter />
        <Analytics config={userConfig.analytics} />
      </body>
    </html>
  );
}
