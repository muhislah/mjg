import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  i18n: {
    locales: ['id', 'en', 'ar'],
    defaultLocale: 'id',
    // localeDetection: false,
  },
};

export default nextConfig;
