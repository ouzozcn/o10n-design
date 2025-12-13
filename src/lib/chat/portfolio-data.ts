// src/lib/chat/portfolio-data.ts

export const portfolioProjects = {
  caseStudies: [
    {
      id: 'jotform-2fa',
      title: 'Jotform 2FA',
      subtitle: 'Enhancing Security Through Two-Factor Authentication',
      role: 'Product Designer & UX Researcher',
      timeline: 'February - June 2023',
      team: ['1 Backend Dev', '1 Frontend Dev', '1 PM', '2 QA Engineers'],
      tools: ['Figma', 'UserTesting', 'FullStory'],
      url: '/case-study/jotform-2fa',
      impact: {
        users: '10,000+ active 2FA users',
        retention: '95% retention rate',
        enterprises: '40+ enterprise clients',
      },
      tags: ['Security UX', 'Enterprise SaaS', 'Analytics', 'B2B'],
    },
  ],

  products: [
    {
      id: 'kroma',
      title: 'Kroma',
      subtitle: 'Color Blindness Accessibility Checker',
      role: 'Product Designer & Frontend Developer',
      timeline: 'April - July 2023',
      url: '/product/kroma',
      liveUrl: 'https://usekroma.com',
      status: 'live',
      tags: ['Accessibility', 'Open Source', 'Tool', 'Free'],
    },
    {
      id: 'brifl-design-system',
      title: 'Brifl Design System',
      subtitle: 'Modular UI Foundation',
      role: 'UI Designer',
      timeline: 'August - December 2021',
      url: '/product/brifl-design-system',
      specs: {
        components: '30+',
        variants: '200+',
        principle: 'Atomic Design',
      },
      tags: ['Design System', 'Components', 'React'],
    },
  ],

  ideas: [
    {
      id: 'brifl',
      title: 'Brifl',
      subtitle: 'Collaborative Form Building for Creatives',
      role: 'Product Designer & UX Researcher',
      timeline: 'January - December 2022',
      status: 'concept',
      url: '/ideas/brifl',
      tags: ['Concept', 'SaaS', 'Collaboration', 'Open Source'],
    },
    {
      id: 'jotform-logbook',
      title: 'Jotform Logbook',
      subtitle: 'Internal Tool for Company Awareness',
      role: 'Product Designer',
      timeline: 'October 2024',
      status: 'designed',
      url: '/ideas/jotform-logbook',
      tags: ['Internal Tool', 'Enterprise', 'Collaboration'],
    },
  ],
};

export const skillCategories = {
  design: [
    'Product Design',
    'UX Research',
    'UI Design',
    'Design Systems',
    'Accessibility Design',
    'Information Architecture',
    'User Flows & Wireframing',
    'Prototyping',
    'Usability Testing',
  ],

  development: [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'HTML/CSS',
    'JavaScript',
    'Storybook',
    'Git/GitHub',
  ],

  tools: [
    'Figma',
    'Adobe Creative Suite',
    'Storybook',
    'Chromatic',
    'Maze',
    'UserTesting',
    'FullStory',
    'Google Analytics',
    'Hotjar',
    'Jupyter Notebooks',
  ],

  methodologies: [
    'Design Thinking',
    'Atomic Design',
    'Component-Driven Design',
    'Accessibility-First Design',
    'Data-Driven Design',
    'Agile/Scrum',
  ],
};
