import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
   title: 'Components/Button',
   component: Button,
   args: {
      variant: 'primary',
      size: 'medium',
      loading: false,
      disabled: false,
      children: 'Better Call Saul',
   },
   argTypes: {
      variant: {
         control: 'select',
         options: ['primary', 'secondary', 'outline'],
      },
      size: {
         control: 'select',
         options: ['small', 'medium', 'large'],
      },
      loading: {
         control: 'boolean',
      },
      disabled: {
         control: 'boolean',
      },
      children: {
         control: 'text',
      },
      onClick: { action: 'clicked' },
   },
   parameters: {
      controls: {
         expanded: true,
      },
   },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
   args: {
      variant: 'primary',
   },
};

export const Secondary: Story = {
   args: {
      variant: 'secondary',
   },
};

export const Outline: Story = {
   args: {
      variant: 'outline',
   },
};

export const Small: Story = {
   args: {
      size: 'small',
   },
};

export const Large: Story = {
   args: {
      size: 'large',
   },
};

export const Disabled: Story = {
   args: {
      disabled: true,
   },
};

export const Loading: Story = {
   args: {
      loading: true,
      children: 'Loading...',
   },
};
