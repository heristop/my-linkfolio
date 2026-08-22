import type { UserConfig } from "./user.types";
import {
  blueSkyIcon,
  githubIcon,
  instagramIcon,
  linkedinIcon,
  xIcon,
} from "linkfolio/dist/assets";

/**
 * Analytics is read from the environment rather than written here.
 *
 * `NEXT_PUBLIC_` is required on all of these: the values have to reach the
 * browser, and this module is imported by client components as well as by the
 * server. Leave them unset — locally, or in any preview deploy — and
 * `<Analytics>` loads no third-party script at all.
 */
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const umamiHostUrl = process.env.NEXT_PUBLIC_UMAMI_HOST_URL;

/**
 * The adapter treats `src` as an override and silently falls back to Umami
 * Cloud for anything that is not an absolute http(s) URL — so a typo here, or
 * a path like `/stats/script.js`, would ship every visit to a third party
 * instead of to your instance, with nothing failing to say so.
 *
 * Failing the build is the alternative: this module is evaluated while the
 * site is prerendered (every route is static), so the mistake is caught at
 * deploy time and never reaches a visitor.
 */
function selfHostedSrc(): string | undefined {
  if (!umamiSrc) {
    return undefined;
  }

  if (!/^https?:\/\//.test(umamiSrc)) {
    throw new Error(
      `NEXT_PUBLIC_UMAMI_SRC must be an absolute http(s) URL — got "${umamiSrc}". ` +
        "Leave it unset to use Umami Cloud, or give the full URL of your instance's script.",
    );
  }

  return umamiSrc;
}

/**
 * Which tracker this deploy runs. The website id is what selects Umami — it is
 * the only value the adapter cannot default — and it wins over GA, so a
 * half-finished migration measures once rather than twice.
 *
 * `src` and `data-host-url` are independent overrides on top of that: a
 * self-hosted script, a collect API on another origin, either, both or
 * neither.
 *
 * Umami sets no cookie and stores no visitor identifier, which is why nothing
 * here has a consent gate to go with it: Linkfolio asks no such question, and
 * under this provider there is none to ask.
 */
function resolveAnalytics(): UserConfig["analytics"] {
  if (umamiWebsiteId) {
    const src = selfHostedSrc();

    return {
      provider: "umami" as const,
      id: umamiWebsiteId,
      ...(src && { src }),
      ...(umamiHostUrl && { attrs: { "data-host-url": umamiHostUrl } }),
    };
  }

  return gaId ? { provider: "ga" as const, id: gaId } : undefined;
}

const analytics = resolveAnalytics();

const userConfig: UserConfig = {
  ...(analytics && { analytics }),
  avatarSrc: "/assets/avatar.webp",
  avatarAlt: "Avatar",
  fullName: "Alexandre Mogère",
  alias: "@heristop",
  siteUrl: "https://heristop.vercel.app",
  jobTitle: "Software Engineer",
  lang: "en",
  locale: "en_US",
  metaTitle: "Alexandre Mogère — Software Engineer & Indie Maker",
  metaDescription:
    "Software engineer and indie maker. Building GutenKu, ChaTodo, Pix Me!, Pix Who? and other side projects. Find my code, writing and apps in one place.",
  keywords: [
    "Alexandre Mogère",
    "heristop",
    "software engineer",
    "indie maker",
  ],
  enableTypingAlias: true,
  darkTheme: {
    "color-primary": "oklch(0.774 0.071 316.7)",
    "color-secondary": "oklch(0.763 0.073 343.4)",
    "color-background-start": "oklch(0.207 0.032 300.9)",
    "color-background-end": "oklch(0.225 0.033 299.9)",
    "lf-card-bg": "oklch(0.253 0.035 304.4)",
    "lf-card-shadow":
      "0 2px 4px oklch(0 0 0 / 0.2), 0 8px 32px -8px oklch(0 0 0 / 0.4)",
    "lf-card-border": "1px solid oklch(0.774 0.071 316.7 / 0.08)",
    "lf-name-color": "oklch(0.878 0.039 312.6)",
    "lf-alias-color": "oklch(0.763 0.073 343.4)",
    "lf-network-hover-bg": "oklch(0.774 0.071 316.7 / 0.06)",
    "lf-accent-line-color": "oklch(0.763 0.073 343.4)",
    "lf-accent-line-opacity": "0.5",
    "lf-button-opacity": "0.8",
  },
  socialNetworks: [
    {
      url: "https://github.com/heristop",
      iconSrc: githubIcon,
      title: "GitHub",
      description: "Open-source Contributions",
      group: "socialnetwork",
      span: "1x2",
    },
    {
      url: "https://www.linkedin.com/in/heristop",
      iconSrc: linkedinIcon,
      title: "LinkedIn",
      description: "Professional Overview",
      group: "socialnetwork",
    },
    {
      url: "https://x.com/heristop",
      iconSrc: xIcon,
      title: "X",
      description: "Tech Monitoring",
      group: "socialnetwork",
    },
    {
      url: "https://bsky.app/profile/heristop.bsky.social",
      iconSrc: blueSkyIcon,
      title: "BlueSky",
      description: "Tech watch & insights",
      group: "socialnetwork",
    },
    {
      url: "https://instagram.com/heristop",
      iconSrc: instagramIcon,
      title: "Instagram",
      description: "Art & travel Snapshots",
      group: "socialnetwork",
    },
    {
      url: "https://heristop.github.io",
      iconSrc: "/assets/zazen.webp",
      title: "Zazen Code",
      description: "Tech Blog",
      group: "website",
      span: "2x2",
    },
    {
      url: "https://pix-me.studio",
      iconSrc: "/assets/pix-me.webp",
      title: "Pix Me! / Pix Who?",
      description: "AI Avatar Generator & Daily Face Guessing Game",
      group: "project",
      span: "2x2",
    },
    {
      url: "https://gutenku.xyz",
      iconSrc: "/assets/gutenku.webp",
      title: "GutenKu / GutenVerse",
      description: "AI Haiku Generator & Book Guessing Game",
      group: "project",
      span: "2x1",
    },
    {
      url: "https://leclap.pages.dev",
      iconSrc: "/assets/leclap.webp",
      title: "LeClap",
      description: "On-Device Video Composer",
      group: "project",
      span: "2x2",
    },
    {
      url: "https://chatodo.app",
      iconSrc: "/assets/chatodo.webp",
      title: "ChaTodo",
      description: "ADHD-Friendly To-Do List & Task Manager",
      group: "project",
      span: "2x1",
    },
    {
      url: "https://clover-map.nuxt.dev",
      iconSrc: "/assets/clover-map.webp",
      title: "Clover Map",
      description: "Project Management Tool",
      group: "project",
      span: "2x1",
    },
    {
      url: "https://linkfolio-demo.vercel.app",
      iconSrc: "/assets/linkfolio.webp",
      title: "Linkfolio",
      description: "Portfolio Demo",
      group: "project",
      hidden: true,
    },
  ],
};

export default userConfig;
