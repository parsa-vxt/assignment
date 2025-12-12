import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type FooterProps = ComponentProps<'tfoot'>;

export function Footer({ className, ...props }: FooterProps) {
   return (
      <tfoot
         className={cn(
            'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
            className
         )}
         {...props}
      />
   );
}
