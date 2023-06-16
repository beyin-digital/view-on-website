/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
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
