/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [90, 100],
  },
  transpilePackages: ["linkfolio"],
  // Don't advertise the framework and version to scanners.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          // The page links out to 11 third-party sites via target="_blank";
          // send the origin rather than the full URL to each of them.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            // browsing-topics, not the older interest-cohort: that one guarded
            // FLoC, which was abandoned in 2022, so it now opts out of nothing.
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
