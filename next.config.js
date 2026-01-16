/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set base path for GitHub Pages deployment
  // Update this to match your repository name
  basePath: '/Incentive-to-quit-smoking-program',
  assetPrefix: '/Incentive-to-quit-smoking-program',
}

module.exports = nextConfig
