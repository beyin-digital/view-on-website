import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import { GetServerSideProps } from 'next'
import axios from 'axios'

const SitemapXml = (): null => null

export const getServerSideProps: GetServerSideProps = async ({ res }: any) => {
  try {
    const sitemap = new SitemapStream({
      hostname: process.env.NEXT_PUBLIC_APP_URL,
    })

    // Add additional static pages with their respective URLs
    const pages = [
      { url: '/', changefreq: 'daily' }, // Home page
      { url: '/illustration', changefreq: 'weekly' },
      { url: '/example', changefreq: 'weekly' },
      { url: '/login', changefreq: 'monthly' },
      { url: '/signup', changefreq: 'monthly' },
      { url: '/subscribe', changefreq: 'daily' },
      { url: '/contact', changefreq: 'monthly' },
      { url: '/privacy', changefreq: 'yearly' },
    ]

    // Generate sitemaps for each page in each locale
    const locales = ['en', 'ar']

    for (const locale of locales) {
      pages.forEach((page) => {
        const { url, changefreq } = page
        const fullUrl = `/${locale}${url}`

        sitemap.write({ url: fullUrl, changefreq })
      })
    }

    // Generate sitemaps for dynamically generated pages
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/keywords/check/premium`
    )

    const keywords: Array<{ slug: string }> = response.data

    keywords.forEach((keyword) => {
      const { slug } = keyword
      locales.forEach((locale) => {
        const url = `/${locale}/keywords/${slug}`
        sitemap.write({ url, changefreq: 'daily' })
      })
    })

    sitemap.end()
    const xmlString = await streamToPromise(Readable.from(sitemap))

    res.setHeader('Content-Type', 'text/xml')
    res.write(xmlString)
    res.end()
  } catch (error) {
    console.error('Error generating sitemap:', error)
    res.status(500).end()
  }

  return { props: {} }
}

export default SitemapXml
