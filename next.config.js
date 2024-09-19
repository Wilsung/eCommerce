/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = require('./csp')
// const redirects = require('./redirects')

// const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline';
//     style-src 'self' 'unsafe-inline';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
  },
  // redirects,
  // async headers() {
  //   const headers = []

  //   // Prevent search engines from indexing the site if it is not live
  //   // This is useful for staging environments before they are ready to go live
  //   // To allow robots to crawl the site, use the `NEXT_PUBLIC_IS_LIVE` env variable
  //   // You may want to also use this variable to conditionally render any tracking scripts
  //   if (!process.env.NEXT_PUBLIC_IS_LIVE) {
  //     headers.push({
  //       headers: [
  //         {
  //           key: 'X-Robots-Tag',
  //           value: 'noindex',
  //         },
  //       ],
  //       source: '/:path*',
  //     })
  //   }

  //   // Set the `Content-Security-Policy` header as a security measure to prevent XSS attacks
  //   // It works by explicitly whitelisting trusted sources of content for your website
  //   // This will block all inline scripts and styles except for those that are allowed
  //   headers.push({
  //     source: '/(.*)',
  //     headers: [
  //       {
  //         key: 'Content-Security-Policy',
  //         value: cspHeader.replace(/\n/g, ''),
  //       },
  //     ],
  //   })

  //   return headers
  // },
  // webpack(config) {
  //   config.resolve.fallback = {
  //     // if you miss it, all the other options in fallback, specified
  //     // by next.js will be dropped.
  //     ...config.resolve.fallback,

  //     fs: false, // the solution
  //   }

  //   return config
  // },
}

module.exports = nextConfig
