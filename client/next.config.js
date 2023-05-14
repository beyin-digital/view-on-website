/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')

const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  experimental: { appDir: true, esmExternals: 'loose' },
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development',
//   },
}
