const withPWA = require('next-pwa')({
  dest: 'public',
})
const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withPWA({
    i18n,
    compress: true,
    swcMinify: true,
    reactStrictMode: true,
    // experimental: { esmExternals: 'loose' },
    // disable: process.env.NODE_ENV === 'development',
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      register: true,
      scope: '/app',
      sw: 'service-worker.js',
      //...
    },
    // Add the sitemap configuration
    // This will generate sitemaps after every build
    // async rewrites() {
    //   return [
    //     {
    //       source: '/sitemap.xml',
    //       destination: '/api/sitemap',
    //     },
    //   ]
    // },
    // async redirects() {
    //   // Handle the redirect after the get request
    //   return [
    //     {
    //       source: '/keyword/:hashtag',
    //       destination: `${process.env.NEXT_PUBLIC_API_URL}/keywords?letters=:hashtag`,
    //       permanent: false,
    //     },
    //   ]
    // },
    // async exportPathMap() {
    //   const sitemap = require('./next-sitemap')
    //   const routes = await sitemap()

    //   // Map dynamic routes
    //   const dynamicRoutes = routes.filter((route) => route.includes(':'))
    //   const exportPathMap = dynamicRoutes.reduce((pathMap, route) => {
    //     pathMap[route] = { page: route }
    //     return pathMap
    //   }, {})

    //   // Add static routes
    //   const staticRoutes = routes.filter((route) => !route.includes(':'))
    //   staticRoutes.forEach((route) => {
    //     exportPathMap[route] = { page: route }
    //   })

    //   return exportPathMap
    // },
  })
)
