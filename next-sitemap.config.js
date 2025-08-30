/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://o10n.design',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Generate a single sitemap instead of sitemap index
  exclude: [
    '/opengraph-image.png', // Exclude image files from sitemap
    '/docs/**', // Exclude Storybook docs
    '/_next/**',
    '/api/**'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/', '/docs/']
      }
    ],
    additionalSitemaps: [
      'https://o10n.design/sitemap.xml'
    ]
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000
}
