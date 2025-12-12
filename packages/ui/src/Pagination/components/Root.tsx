import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type RootProps = ComponentProps<'nav'>;

export function Root({ className, ...props }: RootProps) {
   return (
      <nav
         className={cn('mx-auto flex w-full justify-center', className)}
         role="navigation"
         {...props}
      />
   );
}
