export default function StructuredData() {
  const personSchema = {
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
      url: 'https://o10n.design/assets/images/og-image.jpg',
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

    workLocation: {
      '@type': 'Place',
      name: 'Ankara, Turkey',
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

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://o10n.design/#service',
    name: 'Product Design Services',
    description:
      'Professional product design, UI/UX design, UX research, and design engineering services',
    provider: {
      '@id': 'https://o10n.design/#person',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Product Design',
      'UI/UX Design',
      'User Interface Design',
      'User Experience Design',
      'Design Systems',
      'Frontend Development',
      'Design Engineering',
    ],
    offers: {
      '@type': 'Offer',
      description: 'Product design, UI/UX design, UX research, and design engineering services',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
