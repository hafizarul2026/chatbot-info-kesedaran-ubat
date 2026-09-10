import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const isCloudflare =
  process.env.CLOUDFLARE === "true" || process.env.CF_PAGES === "true";
const isStaticExport = isGithubPages || isCloudflare;
const repoName = "chatbot-info-kesedaran-ubat";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: { unoptimized: true },
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        ...(isGithubPages
          ? {
              basePath: `/${repoName}`,
              assetPrefix: `/${repoName}`,
            }
          : {}),
      }
    : {}),
};

export default nextConfig;
