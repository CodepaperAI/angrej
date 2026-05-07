import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ncx-s3.s3.us-east-2.amazonaws.com' },
      { protocol: 'https', hostname: 'theangrejsinghnclex.com' },
    ],
  },
};

export default nextConfig;
