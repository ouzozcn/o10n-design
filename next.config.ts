import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    return config;
  },
  async redirects() {
    // Only apply redirects in production
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }
    
    return [
      // Redirect HTTP to HTTPS (permanent redirect)
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://o10n.design/:path*',
        permanent: true,
      },
      // Redirect www to non-www (permanent redirect)
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.o10n.design',
          },
        ],
        destination: 'https://o10n.design/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
