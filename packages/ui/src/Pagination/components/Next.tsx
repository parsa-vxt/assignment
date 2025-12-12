import type { ComponentProps } from 'react';

import { ChevronRightIcon } from 'lucide-react';
import { cn } from 'toolbox';

export type NextProps = Omit<ComponentProps<'button'>, 'children'> & {
   label?: string;
};

export function Next({ className, label = 'Next', ...props }: NextProps) {
   return (
      <button
         aria-label="Next"
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
         {label ? <span>{label}</span> : null}
         <ChevronRightIcon className="h-4 w-4" />
      </button>
   );
}
