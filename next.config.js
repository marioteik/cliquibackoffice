/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    experimentalReact: true,
  },
  images: {
    domains: ["pbs.twimg.com"],
  },
};

module.exports = nextConfig;
