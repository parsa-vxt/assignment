import type { ComponentProps } from 'react';

import { ChevronLeftIcon } from 'lucide-react';
import { cn } from 'toolbox';

export type PreviousProps = Omit<ComponentProps<'button'>, 'children'> & {
   label?: string;
};

export function Previous({
   className,
   label = 'Previous',
   ...props
}: PreviousProps) {
   return (
      <button
         aria-label="Previous"
         type="button"
         className={cn(
            'inline-flex h-9 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'disabled:pointer-events-none disabled:opacity-50',
            className
         )}
         {...props}
      >
         <ChevronLeftIcon className="h-4 w-4" />
         {label ? <span>{label}</span> : null}
      </button>
   );
}
