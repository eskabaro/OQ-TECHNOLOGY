/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['react-hook-form', 'classnames', 'sass']
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'images.ctfassets.net',
        }]
    },
  env: {
    CONTENTFUL_SPACE_ID:process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
}

export default nextConfig
