import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextLink from '../components/TextLink';

const meta: Meta<typeof TextLink> = {
  title: 'Components/Text Link',
  component: TextLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    style: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The visual style of the link',
    },
    label: {
      control: 'text',
      description: 'The text content of the link',
    },
    to: {
      control: 'text',
      description: 'The URL or path the link points to',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the link',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Primary: Story = {
  args: {
    label: 'Read More',
    style: 'primary',
    to: '/about',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Learn More',
    style: 'secondary',
    to: '/features',
  },
};

export const ExternalLink: Story = {
  args: {
    label: 'Visit Documentation',
    style: 'primary',
    to: 'https://docs.example.com',
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Custom Styled Link',
    style: 'secondary',
    to: '/custom',
    className: 'text-purple-600 hover:text-purple-800',
  },
};

export const LongText: Story = {
  args: {
    label: 'This is a very long link text that demonstrates how the component handles longer content',
    style: 'primary',
    to: '/long-text',
  },
}; 