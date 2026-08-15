const DEFAULT_SITE_URL = "https://heristop.vercel.app";

/**
 * Absolute base URL of the deployed site, without a trailing slash. Not
 * necessarily a bare origin: a base path is preserved, so a fork served from
 * https://user.github.io/my-linkfolio keeps its /my-linkfolio segment.
 *
 * An unset, blank, or unparseable NEXT_PUBLIC_SITE_URL (a cleared value in the
 * Vercel dashboard, `NEXT_PUBLIC_SITE_URL=` in a .env file, or a value missing
 * its scheme) falls back to the default. Without that guard the bad value
 * reaches `new URL()` at module scope, which throws and fails the build.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!raw) {
    return DEFAULT_SITE_URL;
  }

  try {
    const url = new URL(raw);

    // Keep any base path (a fork served from https://user.github.io/my-linkfolio
    // needs it in every canonical and sitemap URL); strip only trailing slashes.
    return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
  } catch {
    // Falling back silently would hand this fork's canonical and sitemap URLs to
    // the original author's domain, so make the misconfiguration visible.
    console.warn(
      `[site] Ignoring invalid NEXT_PUBLIC_SITE_URL ${JSON.stringify(raw)} and falling back to ${DEFAULT_SITE_URL}. Include the scheme, e.g. https://example.com`,
    );

    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = resolveSiteUrl();
