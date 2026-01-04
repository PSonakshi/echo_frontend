/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Disable image optimization for simpler deployment
  images: {
    unoptimized: true,
  },

  // Environment variables available at runtime
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://echo-production-6fef.up.railway.app:8080',
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL || 'wss://echo-production-6fef.up.railway.app:8080',
  },
};

module.exports = nextConfig;
