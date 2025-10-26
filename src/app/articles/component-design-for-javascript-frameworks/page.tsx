import type { Metadata } from 'next';
import ArticleOneClient from './ArticleOneClient';

export const metadata: Metadata = {
  title: 'Component Design for JavaScript Frameworks | Oğuzhan Özcan',
  description:
    'A comprehensive guide for designers creating components for JavaScript frameworks. Learn about Auto-Layout structure, property naming conventions, design tokens, and prototyping interactions for better design-to-code handoffs.',
  alternates: {
    canonical: 'https://o10n.design/articles/component-design-for-javascript-frameworks',
  },
  openGraph: {
    title:
      "Component Design for JavaScript Frameworks | A Designer's Guide to JS-Friendly Components",
    description:
      'Master the four fundamentals of JS-friendly component design: Structure, Properties, Tokens, and Interactions. Create components that translate seamlessly from Figma to React, Vue, Angular, and Svelte.',
    url: 'https://o10n.design/articles/component-design-for-javascript-frameworks',
    type: 'article',
    images: [
      {
        url: 'https://o10n.design/img/og_images/compforjs_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Component Design for JavaScript Frameworks - Design Guide by Oğuzhan Özcan',
      },
    ],
    siteName: 'o10n.design',
    locale: 'en_US',
    publishedTime: '2025-10-15T00:00:00.000Z',
    modifiedTime: '2025-10-27T00:00:00.000Z',
    authors: ['Oğuzhan Özcan'],
    tags: [
      'Component Design',
      'JavaScript Frameworks',
      'Figma',
      'React',
      'Vue',
      'Angular',
      'Svelte',
      'Design Systems',
      'Design Tokens',
      'Accessibility',
      'Auto-Layout',
      'Frontend Development',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Component Design for JavaScript Frameworks',
    description:
      'Learn to design components that translate seamlessly from Figma to React, Vue, Angular, and Svelte. Master structure, properties, tokens, and interactions.',
    images: ['https://o10n.design/img/og_images/compforjs_open_graph.png'],
    creator: '@ouzozcn',
    site: '@ouzozcn',
  },
  metadataBase: new URL('https://o10n.design'),
  applicationName: 'o10n.design',
  authors: [{ name: 'Oğuzhan Özcan', url: 'https://o10n.design/about-me' }],
  creator: 'Oğuzhan Özcan',
  publisher: 'Oğuzhan Özcan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  colorScheme: 'light',
  icons: {
    icon: [
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon-32x32.png',
    apple: [{ url: '/img/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
  category: 'Design & Development',
  classification: 'Educational Article',
  other: {
    'article:section': 'Articles',
    'article:tag':
      'Component Design, JavaScript, Figma, Design Systems, React, Vue, Angular, Svelte',
    reading_time: '25-30 minutes',
  },
  keywords: [
    'component design',
    'JavaScript frameworks',
    'Figma to React',
    'Figma to Vue',
    'Figma to Angular',
    'Figma to Svelte',
    'design systems',
    'component properties',
    'design tokens',
    'Auto-Layout',
    'developer handoff',
    'UI components',
    'design engineering',
    'accessibility',
    'WCAG',
    'Storybook',
    'frontend design',
    'React components',
    'Vue components',
    'product design',
    'Figma Variables',
    'camelCase naming',
    'semantic HTML',
    'CSS Flexbox',
    'design-to-code',
    'component prototyping',
    // Article Focus
    'Component Design',
    'JavaScript Frameworks',
    'Design to Code',
    'Figma Components',
    'Design System',

    // Technical Topics
    'Auto-Layout',
    'Component Properties',
    'Design Tokens',
    'Figma Variables',
    'Interactive Prototypes',
    'Component States',

    // Tools & Platforms
    'Figma',
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'JavaScript',
    'TypeScript',

    // Concepts
    'HTML Structure',
    'CSS Flexbox',
    'Property Naming Conventions',
    'Component Architecture',
    'Design Handoff',
    'Developer-Friendly Design',

    // Methods
    'Frame Nesting',
    'Layer Naming',
    'Atomic Design',
    'Component Hierarchy',
    'State Prototyping',
    'Interaction Design',
    'Component Design',
    'JavaScript Frameworks',
    'Design to Code',
    'Figma Components',
    'Design System',
    'Auto-Layout',
    'Component Properties',
    'Design Tokens',
    'Figma Variables',
    'Interactive Prototypes',
    'Component States',
    'Figma',
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'JavaScript',

    // Target Audience
    'UI Designers',
    'Product Designers',
    'Frontend Developers',
    'Design Engineers',
    'Design System Engineers',
    'Design System Architects',
    'Design System Developers',
    'Design System Designers',
    'Design System Analysts',
    'Design System Managers',
    'Design System Consultants',
    'Design System Trainers',
    'Design System Evaluators',
    'Design System Reviewers',
    'Product Managers',
    'Product Owners',

    // Professional Skills
    'Design-to-Development',
    'Code-First Design',
    'Technical Design',
    'System Design',

    // Personal Brand
    'Oğuzhan Özcan',
    'o10n.design',
  ].join(', '),
};
// JSON-LD Structured Data for better SEO
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    "Component Design for JavaScript Frameworks: A Designer's Guide to Developer-Friendly Components",
  description:
    'A comprehensive guide teaching designers how to create UI components that seamlessly translate from Figma to React, Vue, Angular, and Svelte. Learn the four pillars: structure with Auto-Layout, framework-agnostic property naming, design token implementation, and complete interaction prototyping.',
  image: 'https://o10n.design/og-images/component-design-javascript-frameworks.jpg',
  datePublished: '2025-01-15T00:00:00.000Z',
  dateModified: '2025-01-27T00:00:00.000Z',
  author: {
    '@type': 'Person',
    name: 'Oğuzhan Özcan',
    url: 'https://o10n.design',
    jobTitle: 'Product Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'Jotform',
    },
    sameAs: [
      'https://linkedin.com/in/ouzozcn',
      'https://github.com/ouzozcn',
      'https://twitter.com/ouzozcn',
    ],
  },
  publisher: {
    '@type': 'Person',
    name: 'Oğuzhan Özcan',
    logo: {
      '@type': 'ImageObject',
      url: 'https://o10n.design/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://o10n.design/articles/component-design-for-javascript-frameworks',
  },
  keywords: [
    'Component Design',
    'JavaScript Frameworks',
    'Figma',
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'Design Systems',
    'Design Tokens',
    'Auto-Layout',
    'Developer Handoff',
    'Accessibility',
    'WCAG',
    'Storybook',
    'Frontend Development',
    'UI/UX Design',
    'Design Engineering',
  ],
  articleSection: 'Design & Development',
  wordCount: 6500,
  timeRequired: 'PT25M',
  about: [
    {
      '@type': 'Thing',
      name: 'Component Design',
      description:
        'The practice of designing reusable UI elements that work across platforms and frameworks',
    },
    {
      '@type': 'Thing',
      name: 'JavaScript Frameworks',
      description: 'Modern frontend frameworks including React, Vue, Angular, and Svelte',
    },
    {
      '@type': 'Thing',
      name: 'Design Systems',
      description: 'Comprehensive collections of reusable components and design patterns',
    },
    {
      '@type': 'Thing',
      name: 'Design Tokens',
      description: 'Named variables that store design decisions for consistent theming',
    },
  ],
  teaches: [
    'How to structure Figma frames that map directly to HTML elements',
    'Auto-Layout patterns that translate to CSS Flexbox',
    'Framework-agnostic property naming conventions (camelCase, boolean prefixes)',
    'Design token implementation using Figma Variables',
    'Prototyping complete interaction states (hover, focus, active, disabled, loading)',
    'Accessibility best practices including WCAG 2.2 compliance',
    'Developer handoff preparation and documentation',
    'Component property mapping across React, Vue, Angular, and Svelte',
  ],
  educationalLevel: 'Intermediate to Advanced',
  audience: {
    '@type': 'Audience',
    audienceType:
      'Product Designers, UI/UX Designers, Frontend Developers, Design Engineers, Design System Leads, Product Managers',
  },
  learningResourceType: 'Tutorial',
  isAccessibleForFree: true,
};
// FAQ Schema for better SEO and rich snippets
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the four pillars of developer-friendly component design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The four pillars are: 1) Structure & Naming - using Auto-Layout and meaningful frame names to define HTML structure, 2) Properties & Props - establishing clear, developer-friendly component properties, 3) Tokenization - applying design tokens for scalable theming, and 4) Interaction - prototyping behaviors and states including all accessibility requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Figma Auto-Layout relate to CSS Flexbox?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Figma Auto-Layout directly corresponds to CSS Flexbox properties. When you configure Auto-Layout settings in Figma, you're essentially defining flex-direction, justify-content, align-items, gap, and padding values. Your frame structure defines the HTML structure, with each frame typically becoming a div element in the final code.",
      },
    },
    {
      '@type': 'Question',
      name: 'What naming convention should I use for component properties in Figma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use camelCase for all property names (e.g., cardTitle, isDisabled, buttonLabel). Prefix boolean properties with is, has, can, or show (e.g., isLoading, hasIcon, canClose). Use specific, clear names that indicate purpose rather than generic terms. These conventions work across React, Vue, Angular, and Svelte without modification.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are design tokens and why should I use them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Design tokens are named variables that store design decisions (colors, spacing, typography) instead of hard-coded values. For example, --color-primary-600 instead of #0D99FF. Tokens enable easy theme switching (light/dark mode), maintain consistency across components, simplify maintenance, and map directly to CSS custom properties for developers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What component states should I always design and prototype?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every interactive component should include these 8 essential states: Default (initial appearance), Hover (pointer interaction), Focus (keyboard navigation), Active/Pressed (click feedback), Disabled (non-interactive), Loading (async operations), Error (validation/failure), and Success (confirmation). Additionally, document keyboard navigation patterns and ensure WCAG 2.2 compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I ensure my components are accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ensure accessibility by: 1) Including visible focus states for keyboard navigation (minimum 3:1 contrast), 2) Meeting color contrast requirements (4.5:1 for normal text, 3:1 for large text), 3) Documenting ARIA labels for icon-only buttons, 4) Maintaining minimum 44×44px touch targets, 5) Specifying keyboard interaction patterns, and 6) Testing with screen readers and keyboard-only navigation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my Figma component properties work across different JavaScript frameworks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! When you use framework-agnostic naming conventions (camelCase, semantic names), your property names remain identical across React, Vue, Angular, and Svelte. Only the syntax for passing props and handling events differs. For example, isDisabled works in all frameworks - React uses isDisabled={true}, Vue uses :is-disabled="true", Angular uses [isDisabled]="true", and Svelte uses isDisabled={true}.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many frames should I use when designing a component?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use as few frames as possible while maintaining proper layout. Each frame typically becomes an HTML element in code, so unnecessary nesting adds complexity. Before designing, sketch the structure to identify necessary containers. For example, a simple button needs only 1-2 frames: the button container with padding and an optional content wrapper for icon + text spacing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a component and an instance in Figma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A component is the master definition with all possible states, variants, and properties. An instance is a specific use of that component with particular property values applied. When you update the component, all instances automatically update. This mirrors how components work in code - you define the component once and reuse it with different props.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prepare components for developer handoff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Create a dedicated "Dev-Ready Components" page in Figma with: 1) All variants and states displayed, 2) Property documentation table with types and descriptions, 3) Usage examples with code snippets, 4) Spacing/sizing specifications, 5) Token reference mapping to CSS variables, 6) Interaction specifications with timing and easing, and 7) Accessibility notes including keyboard navigation and ARIA requirements. Use Figma Dev Mode and consider Storybook integration for comprehensive documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What common mistakes should I avoid when designing components?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid these common pitfalls: 1) Over-nesting frames (keep structure flat), 2) Using inconsistent naming conventions, 3) Hard-coding values instead of using tokens, 4) Missing interactive states (hover, focus, disabled, etc.), 5) Unclear component boundaries, 6) Non-semantic frame names (Rectangle_5 instead of ButtonContainer), 7) Ignoring responsive behavior, and 8) Neglecting accessibility considerations like focus states and color contrast.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does this approach work with Storybook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you use proper naming conventions in Figma, your components translate directly to Storybook stories. Figma property names become Storybook arg names, property types map to control types (text, boolean, number), and variants become different stories. This alignment allows developers to create comprehensive documentation quickly, enables QA testing of all states, and maintains design-code synchronization.',
      },
    },
  ],
};
export default function ArticleOne() {
  return <ArticleOneClient />;
}
