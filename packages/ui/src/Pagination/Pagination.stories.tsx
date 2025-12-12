import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';

import { Pagination } from './index';

const meta = {
   title: 'Components/Pagination',
   component: Pagination,
   argTypes: {
      maxVisiblePages: {
         control: { type: 'number', min: 5, step: 1 },
      },
      totalPages: {
         control: { type: 'number', min: 1 },
      },
      showPreviousNext: {
         control: 'boolean',
      },
   },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
   args: {
      totalPages: 10,
      maxVisiblePages: 7,
      showPreviousNext: true,
   },
   render: (args) => {
      const [page, setPage] = useState(1);
      return (
         <div className="flex flex-col gap-4 items-center">
            <p className="text-sm text-muted-foreground">
               Current Page: {page}
            </p>
            <Pagination {...args} currentPage={page} onPageChange={setPage} />
         </div>
      );
   },
};
