interface HashCellProps {
   hash: string;
}

export const HashCell = ({ hash }: HashCellProps) => {
   const start = hash.slice(0, 6);
   const end = hash.slice(-6);
   const truncatedHash = `${start}...${end}`;

   return <span title={hash}>{truncatedHash}</span>;
};
