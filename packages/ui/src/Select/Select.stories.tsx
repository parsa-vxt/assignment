import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select as SelectComponent } from './Select';

const OPTIONS = [
   { label: 'First option', value: 'first' },
   { label: 'Second option', value: 'second' },
   { label: 'Third option', value: 'third' },
   { label: 'Disabled Option', value: 'This is disabled!', disabled: true },
];

const meta = {
   title: 'Components/Select',
   component: SelectComponent,
   args: {
      options: OPTIONS,
      placeholder: 'Select an option',
      clearable: true,
   },
   argTypes: {
      placeholder: { control: 'text' },
      clearable: { control: 'boolean' },
   },
   parameters: {
      controls: {
         expanded: true,
      },
   },
   decorators: [
      (Story) => (
         <div className="w-56">
            <Story />
         </div>
      ),
   ],
} satisfies Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof SelectComponent>;

export const Select: Story = {};
