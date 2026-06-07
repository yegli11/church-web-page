import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      { source: "/history", destination: "/historia", permanent: true },
      { source: "/teachings", destination: "/ensenanzas", permanent: true },
      { source: "/departments", destination: "/departamentos", permanent: true },
      { source: "/ministries", destination: "/ministerios", permanent: true },
    ];
  },
};

export default nextConfig;
