import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

export interface RootLayoutProps extends ComponentProps<'div'> {}

export const RootLayout = ({
   children,
   className,
   ...props
}: RootLayoutProps) => {
   return (
      <div
         className={cn(
            'w-full overflow-x-hidden min-h-screen bg-background',
            className
         )}
         {...props}
      >
         {children}
      </div>
   );
};
