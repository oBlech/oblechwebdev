/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oblech-eo0.pages.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './public',
} 