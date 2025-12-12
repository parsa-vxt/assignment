import type { ComponentProps } from 'react';

import { cva } from 'class-variance-authority';
import { useId } from 'react';
import { cn } from 'toolbox';

const inputClasses = cva(
   'flex h-10 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm placeholder:text-muted-foreground/80 focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
   {
      variants: {
         error: {
            true: 'border-destructive focus-visible:border-transparent focus-visible:ring-destructive text-destructive placeholder:text-destructive/80',
         },
      },
      defaultVariants: {
         error: false,
      },
   }
);

export type InputProps = ComponentProps<'input'> & {
   label?: string;
   description?: string;
   error?: boolean;
   errorMessage?: string;
};

export const Input = ({
   ref,
   label,
   description,
   error,
   errorMessage,
   id,
   className,
   ...props
}: InputProps & { ref?: React.RefObject<HTMLInputElement | null> }) => {
   const idSeed = useId();
   const inputId = id ?? `input-${idSeed}`;
   const descriptionId = `${inputId}-description`;
   const errorId = `${inputId}-error`;

   const hasError = Boolean(error || errorMessage);
   const describedBy = [descriptionId, errorId].filter(Boolean).join(' ');

   return (
      <div className="flex flex-col gap-1">
         {label ? (
            <label
               className="text-sm font-medium text-foreground"
               htmlFor={inputId}
            >
               {label}
            </label>
         ) : undefined}

         {description ? (
            <p className="text-xs text-muted-foreground" id={descriptionId}>
               {description}
            </p>
         ) : undefined}

         <input
            {...props}
            aria-describedby={describedBy}
            aria-invalid={hasError}
            className={cn(inputClasses({ error: hasError }), className)}
            id={inputId}
            ref={ref}
         />

         {hasError && errorMessage ? (
            <p className="text-xs text-destructive" id={errorId}>
               {errorMessage}
            </p>
         ) : undefined}
      </div>
   );
};
