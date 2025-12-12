import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type ContentProps = ComponentProps<'ul'>;

export function Content({ className, ...props }: ContentProps) {
   return (
      <ul
         className={cn('flex flex-row items-center gap-1', className)}
         {...props}
      />
   );
}
