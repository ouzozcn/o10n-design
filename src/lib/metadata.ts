import type { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  url: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  url,
  imageUrl = 'https://o10n.design/og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | Oğuzhan Özcan`;
  
  return {
    title: fullTitle,
    description,
    keywords: [
      'product design',
      'design engineer',
      'user experience design',
      'user interface design',
      'UI development',
      'product management',
      'frontend development',
      'development',
      'portfolio',
      'UX',
      'UI',
      'analytics',
      'data',
      'product',
      'research',
      'accessibility',
      'user-centered',
      'developer-friendly',
      'oğuzhan özcan',
      'oğuz özcan',
      'o10n',
      'o10n.design',
      'o10n design',
      ...keywords,
    ],
    authors: [{ name: 'Oğuzhan Özcan' }],
    creator: 'Oğuzhan Özcan',
    publisher: 'Oğuzhan Özcan',
    openGraph: {
      type,
      locale: 'en_US',
      url,
      siteName: 'Oğuzhan Özcan | Analytics and Data-Driven Product Designer',
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    viewport: 'width=device-width, initial-scale=1',
  };
}

// Predefined metadata for common pages
export const homeMetadata = generateMetadata({
  title: 'Analytics and Data-Driven Product Designer',
  description: 'Analytics and data-driven product designer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
  url: 'https://o10n.design',
});

export const aboutMetadata = generateMetadata({
  title: 'About Me',
  description: 'Learn about Oğuzhan Özcan, a product designer focused on analytics-driven design, accessibility, and developer-friendly solutions.',
  url: 'https://o10n.design/about-me',
});

export const contactMetadata = generateMetadata({
  title: 'Contact',
  description: 'Get in touch with Oğuzhan Özcan for product design, UI/UX design, and design engineering projects.',
  url: 'https://o10n.design/contact',
}); 