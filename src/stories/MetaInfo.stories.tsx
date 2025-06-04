import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MetaInfo from '../components/MetaInfo';

const meta: Meta<typeof MetaInfo> = {
  title: 'Components/Meta Info',
  component: MetaInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed above the meta information',
    },
    firstMeta: {
      control: 'text',
      description: 'First meta information',
    },
    secondMeta: {
      control: 'text',
      description: 'Second meta information',
    },
    thirdMeta: {
      control: 'text',
      description: 'Third meta information',
    },
    fourthMeta: {
      control: 'text',
      description: 'Fourth meta information',
    },
    fifthMeta: {
      control: 'text',
      description: 'Fifth meta information',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetaInfo>;

export const Default: Story = {
  args: {
    title: 'Project Details',
    firstMeta: 'Type: Web App',
    secondMeta: 'Status: In Progress',
    thirdMeta: 'Team: 5 people',
    fourthMeta: 'Launched: 2024',
    fifthMeta: 'Stack: React, Node.js',
  },
};

export const WithTitleOnly: Story = {
  args: {
    title: 'Meta Only',
  },
};

export const WithOneMeta: Story = {
  args: {
    firstMeta: 'Single meta field',
  },
};

export const WithThreeMetas: Story = {
  args: {
    title: 'Quick Facts',
    firstMeta: 'Design System',
    secondMeta: '2024',
    thirdMeta: 'Remote',
  },
};

export const Empty: Story = {
  args: {},
};

export const LongText: Story = {
  args: {
    title: 'Long Meta Example',
    firstMeta: 'This is a very long meta information field to demonstrate how the component handles overflow and wrapping in the layout.',
    secondMeta: 'Another long meta field with even more details and explanations for the user to read.',
  },
};
