export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://o10n.design/#person',
    name: 'Oğuzhan Özcan',
    alternateName: ['Oguzhan Ozcan', 'Oğuz Özcan'],
    jobTitle: 'Product Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'Jotform',
    },
    description:
      'Analytics and data-driven product designer who prioritizes research-based methodologies, accessibility, user-centered designs, and developer friendliness.',
    url: 'https://o10n.design',
    mainEntityOfPage: 'https://o10n.design',
    image: {
      '@type': 'ImageObject',
      url: '/assets/images/og-image.jpg',
      width: 400,
      height: 400,
    },
    sameAs: [
      'https://linkedin.com/in/ouzozcn/',
      'https://github.com/ouzozcn',
      'https://www.behance.net/oguzhanozcan',
      'https://dribbble.com/ouzozcn',
      'https://medium.com/@ouzozcn',
    ],
    knowsAbout: [
      'Product Design',
      'Design Engineering',
      'User Experience Design',
      'User Interface Design',
      'UI Development',
      'Frontend Development',
      'Product Management',
      'Design Systems',
      'Accessibility',
      'User Research',
      'Data Analytics',
      'Prototyping',
      'Wireframing',
      'Visual Design',
      'Interaction Design',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Product Designer',
      occupationLocation: {
        '@type': 'Place',
        name: 'Ankara, Turkey',
      },
      skills: [
        'Figma',
        'Storybook',
        'Chromatic',
        'Framer',
        'Webflow',
        'Adobe Creative Suite',
        'Jira',
        'Confluence',
        'Notion',
        'Prototyping',
        'User Research',
        'HTML/CSS',
        'JavaScript',
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Jupyter Notebooks',
        'SQL',
        'Git',
        'GitHub',
        'Google Analytics',
      ],
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Middle East Technical University',
      },
    ],

    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'professional',
      email: 'oguz@o10n.design',
      url: 'https://o10n.design/contact',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
