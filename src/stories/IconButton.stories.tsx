import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../components/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
   
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
    icon: {
      control: 'object',
      description: 'The icon to display in the button',
    },
    onClick: { action: 'This button was clicked' },
    to: {
      control: 'text',
      description: 'Optional URL to navigate to when clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    icon: <AddIcon />,
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
    icon: <EditIcon />,
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    size: 'medium',
    icon: <SettingsIcon />,
  },
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
    icon: <FavoriteIcon />,
  },
};

export const Large: Story = {
  args: {
    type: 'primary',
    size: 'large',
    icon: <ShareIcon />,
  },
};

export const WithLink: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
    icon: <DeleteIcon />,
    to: '/delete',
  },
};

export const Danger: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    icon: <DeleteIcon />,
  },
};

export const Settings: Story = {
  args: {
    type: 'tertiary',
    size: 'medium',
    icon: <SettingsIcon />,
  },
}; 