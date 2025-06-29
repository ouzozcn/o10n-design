/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://o10n.design',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://o10n.design/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/_next/*', '/admin/*'],
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/case-study/')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/product/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/ideas/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/experiment/')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path === '/about-me') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
