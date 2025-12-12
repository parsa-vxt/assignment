import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type ItemProps = ComponentProps<'li'>;

export function Item({ className, ...props }: ItemProps) {
   return <li className={cn('', className)} {...props} />;
}
