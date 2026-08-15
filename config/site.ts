const DEFAULT_SITE_URL = "https://heristop.vercel.app";

/**
 * Absolute origin of the deployed site, without a trailing slash.
 *
 * Uses `||` rather than `??` so a defined-but-empty env var (a blank value in
 * the Vercel dashboard, or `NEXT_PUBLIC_SITE_URL=` in a .env file) falls back
 * instead of producing `new URL("")`, which throws and fails the build.
 * A value without a scheme is rejected for the same reason.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

  try {
    return new URL(raw).origin;
  } catch {
    return new URL(DEFAULT_SITE_URL).origin;
  }
}

export const siteUrl = resolveSiteUrl();
