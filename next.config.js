/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true"
const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true"
const repoName = "milisprinterdurres"
const useRepoBasePath = isGithubPages && !hasCustomDomain

const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  output: "export",
  trailingSlash: true,
  basePath: useRepoBasePath ? `/${repoName}` : "",
  assetPrefix: useRepoBasePath ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "i.ibb.co"],
  },
}

module.exports = nextConfig
