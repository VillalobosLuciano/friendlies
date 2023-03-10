/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
