/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  devIndicators: false,
  basePath: "/milisprinterdurres",
  assetPrefix: "/milisprinterdurres",
  images: {
    unoptimized: true,
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
}

module.exports = nextConfig
