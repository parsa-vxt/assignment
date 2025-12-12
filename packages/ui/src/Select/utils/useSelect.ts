import type { KeyboardEvent } from 'react';

import { useEffect, useRef, useState } from 'react';

import type { SelectOption } from '../types';

function getInitialHighlight(
   selectedValue: string | null,
   options: SelectOption[]
) {
   if (selectedValue) {
      const index = options.findIndex(
         (option) => option.value === selectedValue
      );
      if (index >= 0) return index;
   }
   return options.length ? 0 : null;
}

export interface UseSelectProps {
   options: SelectOption[];
   value?: string | null;
   defaultValue?: string | null;
   onChange?: (value: string | null) => void;
}

export function useSelect({
   options,
   value,
   defaultValue,
   onChange,
}: UseSelectProps) {
   const [open, setOpen] = useState(false);
   const [internalValue, setInternalValue] = useState<string | null>(
      value ?? defaultValue ?? null
   );
   const [highlighted, setHighlighted] = useState<number | null>(null);

   const rootRef = useRef<HTMLDivElement | null>(null);
   const triggerRef = useRef<HTMLButtonElement | null>(null);

   const optionsByValue = new Map(options.map((opt) => [opt.value, opt]));

   const selectedValue = value ?? internalValue ?? null;
   const selectedOption = selectedValue
      ? (optionsByValue.get(selectedValue) ?? null)
      : null;

   const setInitialHighlight = () => {
      setHighlighted(
         (prev) => prev ?? getInitialHighlight(selectedValue, options)
      );
   };

   const closeList = () => {
      setOpen(false);
      setHighlighted(null);
   };

   const handleChange = (nextValue: string | null) => {
      setInternalValue(nextValue);
      onChange?.(nextValue);
      closeList();
   };

   const moveHighlight = (delta: number) => {
      if (!options.length) return;
      setHighlighted((prev) => {
         const start = prev ?? getInitialHighlight(selectedValue, options) ?? 0;
         return (start + delta + options.length) % options.length;
      });
   };

   const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      if (!options.length) return;

      if (event.key === 'ArrowDown') {
         event.preventDefault();
         if (!open) setOpen(true);
         setInitialHighlight();
         moveHighlight(1);
         return;
      }

      if (event.key === 'ArrowUp') {
         event.preventDefault();
         if (!open) setOpen(true);
         setInitialHighlight();
         moveHighlight(-1);
         return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
         event.preventDefault();
         if (!open) {
            setOpen(true);
            setInitialHighlight();
            return;
         }
         const option = highlighted !== null ? options[highlighted] : undefined;
         if (option && !option.disabled) handleChange(option.value);
         return;
      }

      if (event.key === 'Escape') {
         event.preventDefault();
         closeList();
      }
   };

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (!rootRef.current) return;
         if (
            event.target instanceof Node &&
            rootRef.current.contains(event.target)
         ) {
            return;
         }
         closeList();
      };

      if (!open) return undefined;

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [open]);

   return {
      handleChange,
      handleKeyDown,
      highlighted,
      open,
      options,
      rootRef,
      selectedOption,
      selectedValue,
      setHighlighted,
      setInitialHighlight,
      setOpen,
      triggerRef,
   };
}
