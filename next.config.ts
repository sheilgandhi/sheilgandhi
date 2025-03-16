import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: [
            'pbs.twimg.com',
            'encrypted-tbn0.gstatic.com',
            'cdn.sanity.io',
        ],
    },
};

export default nextConfig;
