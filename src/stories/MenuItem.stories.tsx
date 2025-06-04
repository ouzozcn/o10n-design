import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from '../components/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Menu Item',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The text content of the menu item',
    },
    svg: {
      control: 'object',
      description: 'Optional icon to display in the menu item',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the menu item container',
    },
    to: {
      control: 'text',
      description: 'Optional URL to navigate to when clicked',
    },
    titleClassName: {
      control: 'text',
      description: 'Additional CSS classes to apply to the title text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
  args: {
    title: 'Home',
    to: '/',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Home',
    svg: <HomeIcon sx={{ fontSize: 40 }} />,
    to: '/',
  },
};

export const WorkItem: Story = {
  args: {
    title: 'Work',
    svg: <WorkIcon sx={{ fontSize: 40 }} />,
    to: '/work',
  },
};

export const EducationItem: Story = {
  args: {
    title: 'Education',
    svg: <SchoolIcon sx={{ fontSize: 40 }} />,
    to: '/education',
  },
};

export const CodeItem: Story = {
  args: {
    title: 'Code',
    svg: <CodeIcon sx={{ fontSize: 40 }} />,
    to: '/code',
  },
};

export const WithCustomClass: Story = {
  args: {
    title: 'Custom Styled',
    svg: <HomeIcon sx={{ fontSize: 40 }} />,
    to: '/custom',
    className: 'bg-blue-100 hover:bg-blue-200',
    titleClassName: 'text-blue-900',
  },
};

export const WithoutLink: Story = {
  args: {
    title: 'Static Item',
    svg: <HomeIcon sx={{ fontSize: 40 }} />,
  },
};

export const Compact: Story = {
  args: {
    title: 'Compact Item',
    svg: <HomeIcon sx={{ fontSize: 40 }} />,
    to: '/compact',
    className: 'flex-1 !min-h-0 !p-6 h-full',
  },
}; 