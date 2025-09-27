import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Hauscard from '../components/Hauscard';
import Tag from '../components/Tag';

const meta: Meta<typeof Hauscard> = {
  title: 'Components / Hauscard',
  component: Hauscard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the card',
    },
    hasBackgroundImage: {
      control: 'boolean',
      description: 'Whether to show a background image',
    },
    backgroundImageUrl: {
      control: 'text',
      description: 'URL of the background image',
    },
    tags: {
      control: 'object',
      description: 'Array of tags to display',
    },
    children: {
      control: 'object',
      description: 'Content to display in the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hauscard>;

export const Default: Story = {
  args: {
    title: 'There will be a title here',
   
    
    tags: [
      { label: 'Design', type: 'lime', size: 'medium' },
      { label: 'Development', type: 'amber', size: 'medium' },
    ],
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: 'Featured Project',
    hasBackgroundImage: true,
    backgroundImageUrl: 'https://picsum.photos/800/400',
   
    tags: [
      { label: 'Featured', type: 'red', size: 'medium' },
      { label: 'New', type: 'teal', size: 'medium' },
    ],
  },
};

export const WithoutTags: Story = {
  args: {
    title: 'Simple Project',
  
  },
};

export const WithManyTags: Story = {
  args: {
    title: 'Complex Project',
    
    tags: [
      { label: 'Design', type: 'lime', size: 'medium' },
      { label: 'Development', type: 'amber', size: 'medium' },
      { label: 'Research', type: 'teal', size: 'medium' },
      { label: 'UX', type: 'purple', size: 'medium' },
      { label: 'UI', type: 'lime', size: 'medium' },
    ],
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long project title that demonstrates how the component handles',
    
    tags: [
      { label: 'Design', type: 'lime', size: 'medium' },
    ],
  },
};

export const CustomContent: Story = {
  args: {
    title: 'Custom Content Project',
    
    tags: [
      { label: 'Custom', type: 'amber', size: 'medium' },
    ],
  },
};
