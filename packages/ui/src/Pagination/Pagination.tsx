import type { ComponentProps } from 'react';

import { cn } from 'toolbox';

import {
   Content,
   Ellipsis,
   Item,
   Link,
   Next,
   Previous,
   Root,
} from './components';

export interface PaginationProps extends ComponentProps<'nav'> {
   currentPage: number;
   totalPages: number;
   onPageChange: (page: number) => void;
   siblingCount?: number;
   showPreviousNext?: boolean;
   previousLabel?: string;
   nextLabel?: string;
   /**
    * Maximum number of visible items + ellipses.
    * @default 7
    */
   maxVisiblePages?: number;
}

function generatePageNumbers(
   currentPage: number,
   totalPages: number,
   maxVisiblePages: number
): (number | 'ellipsis')[] {
   if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
   }

   const siblingCount = Math.max(0, Math.floor((maxVisiblePages - 5) / 2));

   const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
   const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

   const firstPageIndex = 1;
   const lastPageIndex = totalPages;

   const itemCountIfOneSide = maxVisiblePages - 2;

   const shouldShowLeftDots = currentPage > maxVisiblePages - 3;
   const shouldShowRightDots = currentPage < totalPages - (maxVisiblePages - 4);

   if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = Array.from(
         { length: itemCountIfOneSide },
         (_, i) => i + 1
      );
      return [...leftRange, 'ellipsis', totalPages];
   }

   if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = Array.from(
         { length: itemCountIfOneSide },
         (_, i) => totalPages - itemCountIfOneSide + i + 1
      );
      return [firstPageIndex, 'ellipsis', ...rightRange];
   }

   if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Array.from(
         { length: rightSiblingIndex - leftSiblingIndex + 1 },
         (_, i) => leftSiblingIndex + i
      );
      return [
         firstPageIndex,
         'ellipsis',
         ...middleRange,
         'ellipsis',
         lastPageIndex,
      ];
   }

   return Array.from({ length: totalPages }, (_, i) => i + 1);
}

function PaginationComponent({
   currentPage,
   totalPages,
   onPageChange,
   siblingCount,
   showPreviousNext = true,
   previousLabel = 'Previous',
   nextLabel = 'Next',
   maxVisiblePages = 7,
   className,
   ...props
}: PaginationProps) {
   const effectiveMax =
      siblingCount !== undefined ? 5 + siblingCount * 2 : maxVisiblePages;

   const pages = generatePageNumbers(currentPage, totalPages, effectiveMax);

   return (
      <Root className={cn(className)} {...props}>
         <Content>
            {showPreviousNext ? (
               <Item>
                  <Previous
                     disabled={currentPage <= 1}
                     label={previousLabel}
                     onClick={() => onPageChange(currentPage - 1)}
                  />
               </Item>
            ) : null}

            {pages.map((page, index) =>
               page === 'ellipsis' ? (
                  // eslint-disable-next-line @eslint-react/no-array-index-key
                  <Item key={`ellipsis-${index}`}>
                     <Ellipsis />
                  </Item>
               ) : (
                  <Item key={page}>
                     <Link
                        isActive={page === currentPage}
                        onClick={() => onPageChange(page)}
                     >
                        {page}
                     </Link>
                  </Item>
               )
            )}

            {showPreviousNext ? (
               <Item>
                  <Next
                     disabled={currentPage >= totalPages}
                     label={nextLabel}
                     onClick={() => onPageChange(currentPage + 1)}
                  />
               </Item>
            ) : null}
         </Content>
      </Root>
   );
}

export const Pagination = Object.assign(PaginationComponent, {
   Root,
   Content,
   Item,
   Link,
   Previous,
   Next,
   Ellipsis,
});
