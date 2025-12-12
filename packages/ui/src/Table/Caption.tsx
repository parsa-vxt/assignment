import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type CaptionProps = ComponentProps<'caption'>;

export function Caption({ className, ...props }: CaptionProps) {
   return (
      <caption
         className={cn('mt-4 text-sm text-muted-foreground', className)}
         {...props}
      />
   );
}
