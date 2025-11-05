/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/tet' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tet/' : '',
}

module.exports = nextConfig
