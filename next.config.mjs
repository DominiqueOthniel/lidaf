import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: imageHosts,
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      { source: '/contactez-nous', destination: '/contact', permanent: true },
      { source: '/nous-contacter', destination: '/contact', permanent: true },
      { source: '/devis', destination: '/contact', permanent: false },
    ];
  },
};

export default nextConfig;
