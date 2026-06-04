import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
