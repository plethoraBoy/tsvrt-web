/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* ...Your other config rules */
};

// next.config.js
module.exports = {
  images: {
    domains: ["pbs.twimg.com"],
    domains: ["raw.githubusercontent.com"],
    domains: ["img.freepik.com"],
    domains:['avatar.vercel.sh']
  },
};
