import type { Preview } from "@storybook/react";
import React from 'react';
import '../src/app/globals.css';
import customTheme from './customTheme';



const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: customTheme,
      defaultName: 'o10n </docs>',
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    }
  },
  decorators: [
    (Story) => {
      const StoryComponent = Story as React.ComponentType;
      return React.createElement(
        'div',
        { 
          style: { fontFamily: 'var(--font-space-grotesk)' }
        },
        React.createElement(
          'div',
          { style: { margin: '2em' } },
          React.createElement(StoryComponent)
        )
      );
    },
  ],
};

export default preview;