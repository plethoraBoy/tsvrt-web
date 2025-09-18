/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "pbs.twimg.com",
      "raw.githubusercontent.com",
      "img.freepik.com",
      "avatar.vercel.sh",
    ],
  },
};

module.exports = nextConfig;
