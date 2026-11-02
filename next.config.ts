import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disk-cache compaction was stalling local development for minutes.
    // Keep Turbopack's in-memory cache without persisting it between runs.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
