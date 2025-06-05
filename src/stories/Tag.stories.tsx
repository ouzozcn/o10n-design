import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tag from '../components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', description: 'The text label inside the tag.' },
    startIcon: { control: 'text', description: 'Optional icon to display at the start.' },
    endIcon: { control: 'text', description: 'Optional icon to display at the end.' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the tag.'
    },
    type: {
      control: 'radio',
      options: ['outline', 'lime', 'amber', 'red', 'teal', 'purple'],
      description: 'Color style of the tag.'
    },
    className: { control: 'text', description: 'Custom className for extra styling.' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args: {
    label: 'Outline Tag',
    size: 'medium',
    type: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'A simple outline tag. Use tags to highlight keywords or statuses.'
      }
    }
  }
};

export const Lime: Story = {
  args: {
    label: 'Lime Tag',
    size: 'medium',
    type: 'lime',
  },
  parameters: {
    docs: {
      description: {
        story: 'A lime colored tag. Great for positive or success states!',
      }
    }
  }
};

export const Amber: Story = {
  args: {
    label: 'Amber Tag',
    size: 'medium',
    type: 'amber',
  },
  parameters: {
    docs: {
      description: {
        story: 'An amber tag for attention or warning.'
      }
    }
  }
};

export const Red: Story = {
  args: {
    label: 'Red Tag',
    size: 'medium',
    type: 'red',
  },
  parameters: {
    docs: {
      description: {
        story: 'A red tag for errors or critical items.'
      }
    }
  }
};

export const Teal: Story = {
  args: {
    label: 'Teal Tag',
    size: 'medium',
    type: 'teal',
  },
  parameters: {
    docs: {
      description: {
        story: 'A teal tag for info or neutral highlights.'
      }
    }
  }
};

export const Purple: Story = {
  args: {
    label: 'Purple Tag',
    size: 'medium',
    type: 'purple',
  },
  parameters: {
    docs: {
      description: {
        story: 'A purple tag for creativity or special items.'
      }
    }
  }
};

export const WithStartIcon: Story = {
  args: {
    label: 'With Start Icon',
    size: 'medium',
    type: 'lime',
    startIcon: '🌱',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags can have a start icon. Use emojis or icon components!'
      }
    }
  }
};

export const WithEndIcon: Story = {
  args: {
    label: 'With End Icon',
    size: 'medium',
    type: 'amber',
    endIcon: '⭐️',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tags can have an end icon too.'
      }
    }
  }
};

export const LargeTag: Story = {
  args: {
    label: 'Large Tag',
    size: 'large',
    type: 'teal',
    startIcon: '🚀',
    endIcon: '✨',
  },
  parameters: {
    docs: {
      description: {
        story: 'A large tag with both start and end icons. Perfect for making a statement!'
      }
    }
  }
}; 