import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type LinkProps = ComponentProps<'button'> & {
   isActive?: boolean;
};

export function Link({ className, isActive, ...props }: LinkProps) {
   return (
      <button
         aria-current={isActive ? 'page' : undefined}
         type="button"
         className={cn(
            'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'disabled:pointer-events-none disabled:opacity-50',
            isActive &&
               'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground',
            className
         )}
         {...props}
      />
   );
}
