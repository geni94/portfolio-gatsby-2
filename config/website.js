const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `Eugen's Portfolio`, // Navigation and Site Title
  siteTitleAlt: 'Eugen Yzeiri', // Alternative Site title for SEO
  siteTitleShort: 'Eugen', // short_name for manifest
  siteHeadline: 'Web and software developer', // Headline for schema.org JSONLD
  siteUrl: 'http://eugenyzeiri.xyz', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription:
    'A web developer, tech enthusiast and avid learner, and this is a playful & Colorful website for displaying my portfolio.',
  author: 'geni94',

  googleAnalyticsID: 'UA-83799534-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
