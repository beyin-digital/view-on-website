const fetch = require('node-fetch')
const baseUrl = process.env.NEXT_PUBLIC_API_URL

async function generateSitemap() {
  const res = await fetch(`${baseUrl}/keywords/check/premium`)
  const data = await res.json()

  const staticRoutes = [
    '/',
    '/en',
    '/ar',
    '/illustration',
    '/example',
    '/login',
    '/signup',
    '/subscribe',
    '/contact',
    '/privacy',
  ]

  const dynamicRoutes = data.map((keyword) => `/keyword/${keyword.slug}`)

  return [...staticRoutes, ...dynamicRoutes]
}

module.exports = generateSitemap
