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
}

export default nextConfig
