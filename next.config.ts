// next.config.ts
import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
};

export default nextConfig;
