import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:file.htm",
        destination: "/Family?file=:file",
      },
    ];
  },
};

export default nextConfig;