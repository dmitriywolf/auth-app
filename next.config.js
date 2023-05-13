/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'www.pngitem.com'],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
};

module.exports = nextConfig;
