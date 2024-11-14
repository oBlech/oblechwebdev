/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://oblech-aoe.pages.dev',
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