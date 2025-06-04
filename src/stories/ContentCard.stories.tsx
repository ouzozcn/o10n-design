import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentCard from '../components/ContentCard';
import InfoIcon from '@mui/icons-material/Info';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WarningIcon from '@mui/icons-material/Warning';

const meta: Meta<typeof ContentCard> = {
  title: 'Components/ContentCard',
  component: ContentCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
   
    color: {
      control: 'select',
      options: ['lime', 'pink', 'amber', 'teal', 'emerald', 'red', 'cyan', 'orange'],
      description: 'The color theme of the card',
    },
    title: {
      control: 'text',
      description: 'The title displayed in the card header',
    },
    content: {
      control: 'text',
      description: 'The main content of the card',
    },
    icon: {
      control: 'object',
      description: 'Optional icon to display in the header',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentCard>;

export const Default: Story = {
  args: {
    title: 'Welcome to Our Platform',
    content: 'This is a default content card with a clean, modern design. Perfect for displaying important information or announcements.',
    color: 'lime',
  },
};

export const WithCustomIcon: Story = {
  args: {
    title: 'Did You Know?',
    content: 'You can customize the icon of each card to better represent its content. This helps users quickly identify different types of information.',
    color: 'amber',
    icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
  },
};

export const WarningCard: Story = {
  args: {
    title: 'Important Notice',
    content: 'Please make sure to save your work before leaving this page. Any unsaved changes will be lost.',
    color: 'red',
    icon: <WarningIcon sx={{ fontSize: 32 }} />,
  },
};

export const InfoCard: Story = {
  args: {
    title: 'Quick Tips',
    content: 'Hover over different elements to discover helpful tooltips and additional information.',
    color: 'cyan',
    icon: <InfoIcon sx={{ fontSize: 32 }} />,
  },
};

export const SuccessCard: Story = {
  args: {
    title: 'Task Completed',
    content: 'Great job! Your changes have been successfully saved and are now live.',
    color: 'emerald',
  },
}; 