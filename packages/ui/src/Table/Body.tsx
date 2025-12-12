import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type BodyProps = ComponentProps<'tbody'>;

export function Body({ className, ...props }: BodyProps) {
   return (
      <tbody
         className={cn('[&_tr:last-child]:border-0', className)}
         {...props}
      />
   );
}
