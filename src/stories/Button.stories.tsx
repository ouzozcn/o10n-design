import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'This button was clicked' },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    label: {
      control: 'text',
      description: 'The text content of the button',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take up the full width of its container',
    },
    startIcon: {
      control: 'object',
      description: 'Icon to display at the start of the button',
    },
    endIcon: {
      control: 'object',
      description: 'Icon to display at the end of the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'I am a primary button',
    type: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    label: 'I am a secondary button',
    type: 'secondary',
    size: 'medium',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'I am a tertiary button',
    type: 'tertiary',
    size: 'medium',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'I am a primary button with a start icon',
    type: 'primary',
    size: 'medium',
    startIcon: <AddIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    label: 'I am a primary button with an end icon',
    type: 'primary',
    size: 'medium',
    endIcon: <ArrowForwardIcon />,
  },
};

export const Loading: Story = {
  args: {
    label: 'I am a primary button in a loading state',
    type: 'primary',
    size: 'medium',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'I am a primary button that is disabled',
    type: 'primary',
    size: 'medium',
    isDisabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'I am a secondary button that is full width',
    type: 'secondary',
    size: 'large',
    fullWidth: true,
    startIcon: <DownloadIcon />,
  },
};

export const Small: Story = {
  args: {
    label: 'I am a tertiary button that is small',
    type: 'tertiary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'I am a primary button that is large',
    type: 'primary',
    size: 'large',
  },
}; 