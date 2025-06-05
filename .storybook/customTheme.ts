import { create } from 'storybook/theming';

const customTheme = create({
  base: 'light',
  brandTitle: 'o10n </docs>',
  brandUrl: 'https://o10n.design/',
  brandImage: '/docslogo.svg',
  fontBase: "var(--font-space-grotesk), system-ui, sans-serif",
  fontCode: "monospace"
});

export default customTheme;
