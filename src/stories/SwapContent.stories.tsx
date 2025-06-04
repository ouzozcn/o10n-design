import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SwapContent from '../components/SwapContent';

const meta: Meta<typeof SwapContent> = {
  title: 'Components/Swap Content',
  component: SwapContent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text content to display in the swap content area',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwapContent>;

export const Default: Story = {
  args: {
    label: 'Swap Content Area',
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const LongText: Story = {
  args: {
    label: 'This is a very long text that demonstrates how the component handles longer content. It should wrap properly within the container.',
  },
};

export const WithCustomClass: Story = {
  args: {
    label: 'Custom Styled Content',
    className: 'bg-pink-200 hover:bg-lime-200 border-pink-600  rounded-2xl border border-dotted',
  },
};

export const WithPadding: Story = {
  args: {
    label: 'Content with Custom Padding',
    className: 'p-8',
  },
};

export const WithMargin: Story = {
  args: {
    label: 'Content with Margin',
    className: 'm-4',
  },
};
