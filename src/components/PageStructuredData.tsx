interface PageStructuredDataProps {
  type: 'article' | 'product' | 'service';
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}

export default function PageStructuredData({
  type,
  title,
  description,
  url,
  imageUrl = 'https://o10n.design/og-image.jpg',
  publishedTime,
  modifiedTime,
  author = 'Oğuzhan Özcan',
  keywords = [],
}: PageStructuredDataProps) {
  const baseSchema: any = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : type === 'product' ? 'Product' : 'Service',
    headline: title,
    description,
    url,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://o10n.design',
    },
    publisher: {
      '@type': 'Person',
      name: author,
      url: 'https://o10n.design',
    },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
  };

  // Add specific schema properties based on type
  if (type === 'article') {
    baseSchema['@type'] = 'Article';
    baseSchema.articleSection = 'Portfolio';
    baseSchema.isPartOf = {
      '@type': 'WebSite',
      '@id': 'https://o10n.design/#website',
    };
  } else if (type === 'product') {
    baseSchema['@type'] = 'Product';
    baseSchema.category = 'Software';
    baseSchema.offers = {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
    };
  } else if (type === 'service') {
    baseSchema['@type'] = 'Service';
    baseSchema.serviceType = 'Product Design';
    baseSchema.provider = {
      '@type': 'Person',
      name: author,
      url: 'https://o10n.design',
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}
