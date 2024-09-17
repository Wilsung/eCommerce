/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = require('./csp')
const redirects = require('./redirects')

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // HYB
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      process.env.NEXT_PUBLIC_SERVER_URL,
      'avatars.githubusercontent.com',
      'avatar.tobi.sh',
      'cloudflare-ipfs.com',
      'loremflickr.com',
      'mongodb://atlas-sql-66db7a7f5ba2ec5abdf1302a-7toff.a.query.mongodb.net/test?ssl=true&authSource=admin',
    ]
      .filter(Boolean)
      .map(url => url.replace(/https?:\/\//, '')),
  },
  redirects,
}

module.exports = nextConfig
