import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
  experimental: {
    optimizeCss: true,
  },
  turbopack: {},
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
