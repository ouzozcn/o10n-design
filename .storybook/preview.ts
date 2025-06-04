import type { Preview } from "@storybook/react";
import React from 'react';
import { Space_Grotesk } from "next/font/google";
import '../src/app/globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

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
          className: spaceGrotesk.variable,
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