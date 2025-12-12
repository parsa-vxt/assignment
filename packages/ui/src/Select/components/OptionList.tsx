import { CheckIcon } from 'lucide-react';
import { cn } from 'toolbox';

import type { SelectOption } from '../types';

export interface OptionListProps {
   id: string;
   options: SelectOption[];
   highlighted: number | null;
   selectedValue: string | null;
   onHighlight: (index: number | null) => void;
   onSelect: (value: string) => void;
}

export function OptionList({
   id,
   options,
   highlighted,
   selectedValue,
   onHighlight,
   onSelect,
}: OptionListProps) {
   if (options.length === 0) {
      return (
         <div
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-input bg-popover p-1 shadow-md focus:outline-none"
            id={id}
            role="listbox"
         >
            <div className="px-3 py-2 text-sm text-muted-foreground">
               No options
            </div>
         </div>
      );
   }

   return (
      <div
         className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-input bg-popover p-1 shadow-md focus:outline-none"
         id={id}
         role="listbox"
      >
         {options.map((option, index) => {
            const isSelected = option.value === selectedValue;
            const isHighlighted = highlighted === index;

            return (
               <button
                  aria-selected={isSelected}
                  data-highlighted={isHighlighted ? 'true' : undefined}
                  disabled={option.disabled}
                  key={option.value}
                  type="button"
                  onClick={() => onSelect(option.value)}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseEnter={() => onHighlight(index)}
                  role="option"
                  className={cn(
                     'flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-foreground outline-none',
                     'data-[highlighted=true]:bg-accent data-[highlighted=true]:text-accent-foreground data-[highlighted=true]:outline-2 data-[highlighted=true]:outline-ring',
                     { 'font-medium': isSelected },
                     { 'opacity-50 cursor-not-allowed': option.disabled }
                  )}
               >
                  <span className="truncate">{option.label}</span>
                  {isSelected ? (
                     <CheckIcon aria-hidden className="h-4 w-4" />
                  ) : null}
               </button>
            );
         })}
      </div>
   );
}
