interface AmountCellProps {
   amount: string;
   tokenSymbol: string;
}

export const AmountCell = ({ amount, tokenSymbol }: AmountCellProps) => {
   return (
      <span>
         {amount} {tokenSymbol.toUpperCase()}
      </span>
   );
};
