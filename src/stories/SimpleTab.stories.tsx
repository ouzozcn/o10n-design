import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SimpleTab from '../components/SimpleTab';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const meta: Meta<typeof SimpleTab> = {
  title: 'Components/SimpleTab',
  component: SimpleTab,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'hover', 'disabled'],
      description: 'The visual state of the tab',
    },
    icon: {
      control: 'object',
      description: 'The icon to display in the tab',
    },
    to: {
      control: 'text',
      description: 'Optional URL to navigate to when clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the tab container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleTab>;

export const Default: Story = {
  args: {
    state: 'idle',
    icon: <HomeIcon />,
  },
};

export const WithLink: Story = {
  args: {
    state: 'idle',
    icon: <WorkIcon />,
    to: '/work',
  },
};

export const ExternalLink: Story = {
  args: {
    state: 'idle',
    icon: <GitHubIcon />,
    to: 'https://github.com',
  },
};

export const Hover: Story = {
  args: {
    state: 'hover',
    icon: <SettingsIcon />,
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    icon: <LinkedInIcon />,
  },
};

export const WithCustomClass: Story = {
  args: {
    state: 'idle',
    icon: <HomeIcon />,
    className: 'bg-gray-100',
  },
};

export const WithoutIcon: Story = {
  args: {
    state: 'idle',
  },
}; 