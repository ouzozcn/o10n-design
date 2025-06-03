import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import PageBreaker from '../components/PageBreaker';

const meta: Meta<typeof PageBreaker> = {
  title: 'Components/PageBreaker',
  component: PageBreaker,
    parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;    
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
      sectionNumber: 1,
      sectionTitle: 'Section 1',
    },
  };