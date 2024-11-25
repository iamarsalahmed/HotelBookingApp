/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alrajhi-urpay-demo.vaimo.net',
      },
      {
        protocol: 'https',
      hostname: 'images.pexels.com',
      },
    ],
  },
};

module.exports = nextConfig;

