import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type RootProps = ComponentProps<'table'>;

export function Root({ className, ...props }: RootProps) {
   return (
      <div className="relative w-full overflow-auto">
         <table
            className={cn('w-full caption-bottom text-sm', className)}
            {...props}
         />
      </div>
   );
}
