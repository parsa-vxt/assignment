import type { ComponentProps } from 'react';

import { ChevronDownIcon, XIcon } from 'lucide-react';
import { useId } from 'react';
import { cn } from 'toolbox';

import type { SelectOption } from './types';

import { OptionList } from './components';
import { useSelect } from './utils';

type ContainerProps = Omit<ComponentProps<'div'>, 'defaultValue' | 'onChange'>;

export interface SelectProps extends ContainerProps {
   placeholder?: string;
   options: SelectOption[];
   value?: string | null;
   defaultValue?: string | null;
   onChange?: (value: string | null) => void;
   clearable?: boolean;
}

export function Select({
   placeholder = 'Select an option',
   options,
   value,
   defaultValue = null,
   onChange,
   clearable = true,
   className,
   ...divProps
}: SelectProps) {
   const idSeed = useId();
   const selectId = `select-${idSeed}`;

   const {
      handleChange,
      handleKeyDown,
      highlighted,
      open,
      options: normalizedOptions,
      rootRef,
      selectedOption,
      selectedValue,
      setHighlighted,
      setInitialHighlight,
      setOpen,
      triggerRef,
   } = useSelect({ options, value, defaultValue, onChange });

   return (
      <div
         className={cn('flex flex-col gap-1', className)}
         ref={rootRef}
         {...divProps}
      >
         <div className="relative">
            <button
               aria-expanded={open}
               id={selectId}
               ref={triggerRef}
               type="button"
               aria-controls={`${selectId}-listbox`}
               aria-haspopup="listbox"
               onClick={() => {
                  if (!open && normalizedOptions.length) {
                     setInitialHighlight();
                  }
                  setOpen((prev) => !prev);
               }}
               onKeyDown={handleKeyDown}
               className={cn(
                  'flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50'
               )}
            >
               <span className="truncate text-left">
                  {selectedOption ? (
                     selectedOption.label
                  ) : (
                     <span className="text-muted-foreground/80">
                        {placeholder}
                     </span>
                  )}
               </span>

               <div className="flex items-center gap-1">
                  {clearable && selectedOption ? (
                     <button
                        className="rounded cursor-pointer p-0.5 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        type="button"
                        onClick={(event) => {
                           event.stopPropagation();
                           handleChange(null);
                           triggerRef.current?.focus();
                        }}
                     >
                        <XIcon aria-hidden className="h-4 w-4" />
                     </button>
                  ) : null}

                  <ChevronDownIcon
                     aria-hidden
                     className={cn(
                        'h-4 w-4 text-muted-foreground transition-transform',
                        open && 'rotate-180'
                     )}
                  />
               </div>
            </button>

            {open ? (
               <OptionList
                  highlighted={highlighted}
                  id={`${selectId}-listbox`}
                  selectedValue={selectedValue}
                  onHighlight={setHighlighted}
                  onSelect={(next) => handleChange(next)}
                  options={normalizedOptions}
               />
            ) : null}
         </div>
      </div>
   );
}
