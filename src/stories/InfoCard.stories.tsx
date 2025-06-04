import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InfoCard from '../components/InfoCard';

const meta: Meta<typeof InfoCard> = {
  title: 'Components/Info Card',
  component: InfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {},
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