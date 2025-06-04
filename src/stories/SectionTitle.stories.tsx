import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SectionTitle from '../components/SectionTitle';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

const meta: Meta<typeof SectionTitle> = {
  title: 'Components/Section Title',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The text content of the section title',
    },
    startIcon: {
      control: 'object',
      description: 'Optional icon to display at the start of the title',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the section title container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Default: Story = {
  args: {
    title: 'Section Title',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Featured Section',
    startIcon: <StarIcon sx={{ fontSize: 32 }} />,
  },
};

export const WorkSection: Story = {
  args: {
    title: 'Work Experience',
    startIcon: <WorkIcon sx={{ fontSize: 32 }} />,
  },
};

export const EducationSection: Story = {
  args: {
    title: 'Education',
    startIcon: <SchoolIcon sx={{ fontSize: 32 }} />,
  },
};

export const CodeSection: Story = {
  args: {
    title: 'Code Examples',
    startIcon: <CodeIcon sx={{ fontSize: 32 }} />,
  },
};

export const WithCustomClass: Story = {
  args: {
    title: 'Custom Styled Section',
    startIcon: <StarIcon sx={{ fontSize: 32 }} />,
    className: 'bg-blue-100',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long section title that demonstrates how the component handles longer content',
  },
}; 