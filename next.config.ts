import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',//add this line from error
        port: '',
        pathname: '**', // **means apply all path
        search: '',
      },
    ],
  },
};

export default nextConfig;
