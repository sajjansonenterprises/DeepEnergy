import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'deepenergy.onrender.com',
        port: '1337',
        pathname: '/uploads/**', // Adjust based on Strapi image paths
      },
    ],
    domains: ["images.pexels.com","deepenergy.onrender.com"], // ✅ Allow Pexels images
    unoptimized: true, // 👈 Disable optimization (try enabling later)

  },  
};

export default nextConfig;
