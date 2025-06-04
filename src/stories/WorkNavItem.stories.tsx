import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WorkNavItem from '../components/WorkNavItem';

const meta: Meta<typeof WorkNavItem> = {
  title: 'Components/Nav Bar Item',
  component: WorkNavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    order: {
      control: 'number', 
      description: 'The order number of the work item',
    },
    label: {
      control: 'text',
      description: 'The text label of the work item',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the work item is currently active',
    },
    hasEndIcon: {
      control: 'boolean',
      description: 'Whether to show an end icon',
    },
    endIcon: {
      control: 'text',
      description: 'The name of the Material-UI icon to display at the end',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the work item container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorkNavItem>;

export const Default: Story = {
  args: {
    order: 1,
    label: 'Project One',
  },
};

export const Active: Story = {
  args: {
    order: 2,
    label: 'Active Project',
    isActive: true,
  },
};

export const WithCloudIcon: Story = {
  args: {
    order: 3,
    label: 'Cloud Project',
    hasEndIcon: true,
    endIcon: 'cloud',
  },
};

export const WithCustomIcon: Story = {
  args: {
    order: 4,
    label: 'Custom Icon Project',
    hasEndIcon: true,
    endIcon: '✣',
  },
};

export const DoubleDigitOrder: Story = {
  args: {
    order: 10,
    label: 'Tenth Project',
  },
};

export const WithCustomClass: Story = {
  args: {
    order: 5,
    label: 'Custom Styled Project',
    className: 'border border-stone-900',
  },
};

export const LongLabel: Story = {
  args: {
    order: 6,
    label: 'This is a very long project name that demonstrates how the component handles longer content',
  },
}; 