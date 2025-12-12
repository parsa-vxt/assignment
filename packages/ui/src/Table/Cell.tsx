import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type CellProps = ComponentProps<'td'>;

export function Cell({ className, ...props }: CellProps) {
   return (
      <td
         className={cn(
            'p-4 align-middle [&:has([role=checkbox])]:pr-0',
            className
         )}
         {...props}
      />
   );
}
