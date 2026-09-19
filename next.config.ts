import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/GH/:file.htm",
        destination: "/Family?file=:file",
      },
      {
        source: "/GH/:file.html",
        destination: "/Family?file=:file",
      },
    ];
  },
};

export default nextConfig;