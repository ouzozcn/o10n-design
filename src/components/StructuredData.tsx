export default function StructuredData() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://o10n.design/#person',
      name: 'Oğuzhan Özcan',
      alternateName: ['Oğuzhan Özcan', 'Oğuz Özcan'],
      jobTitle: 'Product Designer & Design Engineer',
      description:
        'Research-based product designer and design engineer specializing in SaaS B2B, design systems, and AI-driven workflows. Experienced in bridging design–development gaps with developer-friendly components, scalable systems, and accessibility-first solutions.',
      worksFor: {
        '@type': 'Organization',
        name: 'Jotform Enterprise',
        url: 'https://jotform.com/enterprise',
      },
      url: 'https://o10n.design',
      mainEntityOfPage: 'https://o10n.design',
      image: {
        '@type': 'ImageObject',
        url: 'https://o10n.design/assets/images/og-image.jpg',
        width: 400,
        height: 400,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ankara',
        addressCountry: 'TR',
        postalCode: '06800',
        streetAddress: 'ODTÜ Teknokent',
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
        'Frontend Development',
        'Design Systems',
        'Accessibility',
        'AI Agents',
        'Lead Scoring',
        'Security UX',
        'Storybook',
        'Chromatic',
        'CI/CD Pipelines',
        'Figma',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Next.js',
      ],
      skills: [
        'Figma',
        'Storybook',
        'Chromatic',
        'Adobe Creative Suite',
        'Jira',
        'Confluence',
        'Notion',
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
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Middle East Technical University',
        url: 'https://metu.edu.tr',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'professional',
        email: 'oguz@o10n.design',
        url: 'https://o10n.design/contact',
      },
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Product Designer & Design Engineer',
        description:
          'Designs user-centered, scalable digital products and leads design-to-code workflows.',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://o10n.design/#service',
      name: 'Product Design & Design Engineering Services',
      description:
        'Professional SaaS-focused product design, design engineering, accessibility consulting, and AI-driven workflows.',
      provider: {
        '@id': 'https://o10n.design/#person',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ankara',
        addressCountry: 'TR',
        postalCode: '06800',
        streetAddress: 'ODTÜ Teknokent',
      },
      areaServed: 'Worldwide',
      serviceType: [
        'Product Design',
        'Design Systems',
        'UI/UX Design',
        'Accessibility Consulting',
        'Design Engineering',
        'Frontend Development',
        'UX Research',
        'AI/LLM Experiments',
        'Design-Development Collaboration',
      ],
      offers: {
        '@type': 'Offer',
        description:
          'Comprehensive product design, design systems, and AI-driven design engineering services.',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': 'https://o10n.design/#portfolio',
      name: 'Oğuzhan Özcan Portfolio',
      description:
        'Portfolio showcasing SaaS product design, case studies, and AI-driven design engineering experiments.',
      author: {
        '@id': 'https://o10n.design/#person',
      },
      creator: {
        '@id': 'https://o10n.design/#person',
      },
      publisher: {
        '@id': 'https://o10n.design/#person',
      },
      url: 'https://o10n.design',
      mainEntity: {
        '@id': 'https://o10n.design/#person',
      },
      genre: ['Portfolio', 'Case Study', 'AI Experiment', 'Technical Article'],
      keywords:
        'product design, design engineering, SaaS UX, accessibility, AI agents, Storybook handoff',
      inLanguage: 'en-US',
      datePublished: '2025-01-01',
      dateModified: '2025-09-13',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Oğuzhan Özcan provide?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oğuzhan provides product design, design systems, design engineering, accessibility, and frontend development services.',
          },
        },
        {
          '@type': 'Question',
          name: "What are Oğuzhan's key achievements?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'He implemented Jotform’s 2FA UX (15K+ users), created Kroma accessibility tool, built Hydrogen (AI node map), designed Growth Agent (AI sales platform), and developed Brifl Design System.',
          },
        },
        {
          '@type': 'Question',
          name: "What is Oğuzhan's design philosophy?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Data-driven, accessibility-first, and developer-friendly. He bridges design and engineering with scalable, real-world solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies does Oğuzhan use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'He works with Figma, Storybook, Chromatic, React, TypeScript, Next.js, Tailwind CSS, Jupyter Notebooks, and analytics tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Oğuzhan deliver components?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Through Storybook + Chromatic integrated into CI/CD pipelines, ensuring developer-ready components.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Oğuzhan based?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ankara, Turkey (ODTÜ Teknokent), collaborating globally.',
          },
        },
      ],
    },

    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': 'https://o10n.design/#kroma',
      name: 'Kroma | Color Blindness Accessibility Checker',
      applicationCategory: 'Accessibility Tool',
      operatingSystem: 'Web-based',
      description:
        'Free tool for designers and developers to test UI designs for various types of color blindness.',
      url: 'https://usekroma.com',
      creator: {
        '@id': 'https://o10n.design/#person',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Project',
      '@id': 'https://o10n.design/#hydrogen',
      name: 'Hydrogen',
      description:
        'AI-driven node map project for SaaS lead scoring and intent analysis, with 1000+ signal properties and interactive visualization.',
      creator: {
        '@id': 'https://o10n.design/#person',
      },
      keywords: ['AI Agent', 'Lead Scoring', 'Design Engineering', 'Visualization'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Project',
      '@id': 'https://o10n.design/#growth-agent',
      name: 'Growth Agent',
      description:
        'AI-powered enterprise sales and lead generation platform for automating customer pipelines.',
      creator: {
        '@id': 'https://o10n.design/#person',
      },
      keywords: ['AI Agents', 'Sales Automation', 'Lead Generation', 'Enterprise SaaS'],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
