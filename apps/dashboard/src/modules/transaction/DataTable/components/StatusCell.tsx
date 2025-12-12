import type { Transaction } from '../../../api-sdk';

import { STATUS_MAP } from '../../constants';

interface StatusCellProps {
   status: Transaction.Status;
}

const statusStyles: Record<Transaction.Status, string> = {
   confirmed: 'bg-success/15 text-success',
   pending: 'bg-warning/15 text-warning-foreground',
   failed: 'bg-destructive/15 text-destructive',
};

export const StatusCell = ({ status }: StatusCellProps) => {
   return (
      <span
         className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
      >
         {STATUS_MAP[status]}
      </span>
   );
};
