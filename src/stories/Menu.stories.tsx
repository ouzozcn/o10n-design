import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Menu from '../components/Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    height: 500,
    width: 500,
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the menu container',
    }
  }
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-blue-100',
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {},
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  args: {},
};

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  args: {},
}; 