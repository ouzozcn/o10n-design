/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://o10n.design',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Generate a single sitemap instead of sitemap index
  exclude: [
    '/opengraph-image.png', // Exclude image files from sitemap
    '/_next/**',
    '/api/**',
    '/cdn-cgi/**',
  ],
  additionalPaths: async config => [
    await config.transform(config, '/llms.txt'),
    await config.transform(config, '/llms.md'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cdn-cgi/'],
      },
    ],
    additionalSitemaps: ['https://o10n.design/sitemap.xml'],
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
};
