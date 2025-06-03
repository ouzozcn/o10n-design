import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Button from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    type: 'tertiary',
  },
};

export const ButtonWithStartIcon: Story = {
  args: {
    label: 'Start Icon',
    type: 'primary',
    startIcon: '🚀',
  },
};

export const ButtonWithEndIcon: Story = {
  args: {
    label: 'End Icon',
    type: 'primary',
    endIcon: '➡️',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    type: 'primary',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    type: 'primary',
    isDisabled: true,
  },
};
