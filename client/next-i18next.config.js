const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    localePath: path.resolve('./public/locales'),
  },
}
