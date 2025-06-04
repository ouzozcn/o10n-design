import { addons } from 'storybook/manager-api';
import { create, themes } from 'storybook/theming';
addons.setConfig({
  theme: create({
    base: 'light', // or 'dark'
    brandTitle: 'o10n </docs>',
    brandUrl: 'https://o10n.design/',
    brandImage: '/docslogo.svg', // If in public/
  }),
});
