interface DateCellProps {
   date: Date;
}

export const DateCell = ({ date }: DateCellProps) => {
   const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
   }).format(date);

   return <span className="text-muted-foreground">{formattedDate}</span>;
};
