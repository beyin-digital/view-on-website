/** @type {import('next').NextConfig} */
const axios = require('axios')

const withPWA = require('next-pwa')({
  dest: 'public',
})
const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(
  withPWA({
    async exportPathMap() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/keywords/check/premium`
      )
      const keywords = response.data
      const paths = {}

      const locales = ['en', 'ar']

      locales.forEach((locale) => {
        // Add paths for additional static pages in each locale
        const staticPages = [
          '/',
          '/illustration',
          '/example',
          '/login',
          '/signup',
          '/subscribe',
          '/contact',
          '/privacy',
        ]

        staticPages.forEach((page) => {
          paths[`/${locale}${page}`] = {
            page: page === '/' ? `/${locale}` : `/${locale}${page}`,
          }
        })

        keywords.forEach((keyword) => {
          const { slug } = keyword
          paths[`/${locale}/keywords/${slug}`] = {
            page: '/keywords/[slug]',
            query: { slug, locale },
          }
        })
      })

      return paths
    },
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
  })
)
