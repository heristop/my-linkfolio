/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [90, 100],
  },
  transpilePackages: ["linkfolio"],
};

module.exports = nextConfig;
