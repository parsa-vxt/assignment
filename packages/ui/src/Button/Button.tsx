import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import { cn } from 'toolbox';

const buttonClasses = cva(
   'inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2',
   {
      variants: {
         variant: {
            primary:
               'bg-primary text-primary-foreground hover:bg-primary/90 border border-primary hover:border-primary/90',
            secondary:
               'bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-secondary hover:border-secondary/90',
            outline:
               'border border-input bg-background hover:bg-accent hover:text-accent-foreground border-input hover:border-input/90',
         },
         size: {
            small: 'text-xs px-2 py-1',
            medium: 'text-sm px-4 py-2',
            large: 'text-lg px-6 py-3',
         },
         loading: {
            true: 'opacity-50 pointer-events-none',
         },
         disabled: {
            true: 'opacity-50 pointer-events-none',
         },
      },
      defaultVariants: {
         variant: 'primary',
         size: 'medium',
         loading: false,
         disabled: false,
      },
   }
);

export type ButtonProps = ComponentProps<'button'> &
   VariantProps<typeof buttonClasses>;

export const Button = ({
   variant,
   size,
   loading,
   disabled,
   ...props
}: ButtonProps) => (
   // eslint-disable-next-line @eslint-react/dom/no-missing-button-type
   <button
      {...props}
      className={cn(
         buttonClasses({ variant, size, loading, disabled }),
         props.className
      )}
   />
);
