import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type RowProps = ComponentProps<'tr'>;

export function Row({ className, ...props }: RowProps) {
   return (
      <tr
         className={cn(
            'border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
            className
         )}
         {...props}
      />
   );
}
