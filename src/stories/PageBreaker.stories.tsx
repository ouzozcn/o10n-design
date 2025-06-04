import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import PageBreaker from '../components/PageBreaker';

const meta: Meta<typeof PageBreaker> = {
  title: 'Components/Page Breaker',
  component: PageBreaker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    sectionNumber: { control: 'number' },
    sectionTitle: { control: 'text' },
    className: { control: 'text' },
    children: { control: 'text' }
  },
  tags: ['autodocs'],
};

export default meta;    
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
      sectionNumber: 1,
      sectionTitle: 'I\'m a page breaker',
    
      children: "I will be the content of the page breaker",
    },
  };