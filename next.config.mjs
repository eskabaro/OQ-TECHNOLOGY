/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['react-hook-form', 'classnames', 'sass']
    }
}

export default nextConfig
