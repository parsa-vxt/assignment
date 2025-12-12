import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type HeadProps = ComponentProps<'th'>;

export function Head({ className, ...props }: HeadProps) {
   return (
      <th
         className={cn(
            'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
            className
         )}
         {...props}
      />
   );
}
