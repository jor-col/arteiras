/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // <-- taken from error, needed src for projects-images
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
