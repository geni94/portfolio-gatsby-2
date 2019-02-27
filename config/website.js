const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `Eugen's Portfolio`, // Navigation and Site Title
  siteTitleAlt: 'Eugen Yzeiri', // Alternative Site title for SEO
  siteTitleShort: 'Eugen', // short_name for manifest
  siteHeadline: 'Web and software developer', // Headline for schema.org JSONLD
  siteUrl: 'https://geni94.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful website for displaying a portfolio',
  author: 'geni94',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
