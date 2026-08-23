"use client";

import { registerAnalyticsAdapter } from "linkfolio";

/**
 * Cloudflare Web Analytics, registered locally.
 *
 * The published Linkfolio ships four adapters and Cloudflare is not one of
 * them, so naming it in the config without this resolves to no adapter at all
 * and loads nothing — silently, since an unknown provider reads as "not
 * configured". Re-registering a name replaces it, so a future Linkfolio that
 * ships its own takes over with no change here.
 *
 * A client module, and mounted rather than imported for its side effect,
 * because `registerAnalyticsAdapter` lives behind the package's "use client"
 * boundary: `config/user.config.ts` is read by the server component that builds
 * the config, and calling it from there fails the build outright.
 */
registerAnalyticsAdapter("cloudflare", {
  scripts: (config) => [
    {
      id: "lf-cloudflare",
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      // The beacon reads its token from a JSON attribute rather than a plain
      // one; the quoting is what makes it readable at all.
      attrs: { "data-cf-beacon": JSON.stringify({ token: config.id ?? "" }) },
    },
  ],
  // Cloudflare Web Analytics has no event API — no `track()`, no global to
  // reach. It collects page views on its own and nothing else, so the link
  // clicks the cards emit are recorded nowhere under this provider. An explicit
  // no-op rather than a fallthrough onto whatever global another tag installed.
  send: () => {},
});

/** Renders nothing: mounting it is what pulls the registration into the page. */
export function CloudflareAdapter(): null {
  return null;
}
