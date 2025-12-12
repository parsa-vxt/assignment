import type { ComponentProps } from 'react';

import { MoreHorizontalIcon } from 'lucide-react';
import { cn } from 'toolbox';

export type EllipsisProps = Omit<ComponentProps<'span'>, 'children'>;

export function Ellipsis({ className, ...props }: EllipsisProps) {
   return (
      <span
         aria-hidden
         className={cn(
            'flex h-9 w-9 items-center justify-center text-muted-foreground',
            className
         )}
         {...props}
      >
         <MoreHorizontalIcon className="h-4 w-4" />
         <span className="sr-only">More pages</span>
      </span>
   );
}
