import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // The superannuation page was first published under a misspelt URL; keep old links working
      { source: '/industries/supperannuation', destination: '/industries/superannuation', permanent: true },
    ];
  },
};

export default nextConfig;
