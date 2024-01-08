/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: '*.depositphotos.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
