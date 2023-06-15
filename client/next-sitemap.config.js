/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_API_APP_URL || 'https://www.viewonwebsite.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
