import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: imageHosts,
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
