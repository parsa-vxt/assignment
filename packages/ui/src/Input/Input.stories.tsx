import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
   title: 'Components/Input',
   component: Input,
   args: {
      placeholder: 'you@example.com',
   },
   argTypes: {
      label: { control: 'text' },
      description: { control: 'text' },
      placeholder: { control: 'text' },
      error: { control: 'boolean' },
      errorMessage: { control: 'text' },
   },
   parameters: {
      controls: {
         expanded: true,
      },
   },
   decorators: [
      (Story) => (
         <div className="w-72">
            <Story />
         </div>
      ),
   ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithError: Story = {
   args: {
      error: true,
      errorMessage: 'This field is required',
   },
};

export const WithTitle: Story = {
   args: {
      label: 'Email address',
      placeholder: 'you@example.com',
   },
};

export const WithDescription: Story = {
   args: {
      label: 'Email address',
      description: 'Enter your email champ!',
      placeholder: 'you@example.com',
   },
};
