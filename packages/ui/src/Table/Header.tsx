import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export type HeaderProps = ComponentProps<'thead'>;

export function Header({ className, ...props }: HeaderProps) {
   return <thead className={cn('[&_tr]:border-b', className)} {...props} />;
}
