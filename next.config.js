/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
    loader: "custom", // we made a custom loader
    path: "/",
  },
  swcMinify: true,
};

module.exports = nextConfig;
