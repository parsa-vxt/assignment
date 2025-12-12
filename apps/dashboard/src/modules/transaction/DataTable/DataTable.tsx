import {
   createColumnHelper,
   flexRender,
   getCoreRowModel,
   useReactTable,
} from '@tanstack/react-table';
import { Table } from 'ui';

import type { TransactionDto } from '../../api-sdk/DTOs/TransactionDto';

const columnHelper = createColumnHelper<TransactionDto>();

const columns = [
   columnHelper.accessor('txHash', {
      header: 'Hash',
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor('amount', {
      header: 'Amount',
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor('fromAddress', {
      header: 'From',
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor('toAddress', {
      header: 'To',
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => info.getValue(),
   }),
   columnHelper.accessor('timestamp', {
      header: 'Date',
      cell: (info) => info.getValue().toLocaleString(),
   }),
];

interface TransactionDataTableProps {
   data: TransactionDto[];
}

export const TransactionDataTable = ({ data }: TransactionDataTableProps) => {
   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
   });

   return (
      <div className="rounded-md border border-muted shadow">
         <Table.Root>
            <Table.Header>
               {table.getHeaderGroups().map((headerGroup) => (
                  <Table.Row key={headerGroup.id}>
                     {headerGroup.headers.map((header) => (
                        <Table.Head key={header.id}>
                           {header.isPlaceholder
                              ? null
                              : flexRender(
                                   header.column.columnDef.header,
                                   header.getContext()
                                )}
                        </Table.Head>
                     ))}
                  </Table.Row>
               ))}
            </Table.Header>
            <Table.Body>
               {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                     <Table.Row key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                           <Table.Cell key={cell.id}>
                              {flexRender(
                                 cell.column.columnDef.cell,
                                 cell.getContext()
                              )}
                           </Table.Cell>
                        ))}
                     </Table.Row>
                  ))
               ) : (
                  <Table.Row>
                     <Table.Cell
                        className="h-24 text-center"
                        colSpan={columns.length}
                     >
                        No results.
                     </Table.Cell>
                  </Table.Row>
               )}
            </Table.Body>
         </Table.Root>
      </div>
   );
};
