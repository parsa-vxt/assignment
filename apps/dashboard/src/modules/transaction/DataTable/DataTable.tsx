import {
   createColumnHelper,
   flexRender,
   getCoreRowModel,
   useReactTable,
} from '@tanstack/react-table';
import { Table } from 'ui';

import type { TransactionDto } from '../../api-sdk/DTOs/TransactionDto';

import {
   AddressCell,
   AmountCell,
   ChainCell,
   DateCell,
   HashCell,
   StatusCell,
} from './components';

const columnHelper = createColumnHelper<TransactionDto>();

const columns = [
   columnHelper.accessor('txHash', {
      header: 'Hash',
      cell: (info) => <HashCell hash={info.getValue()} />,
   }),
   columnHelper.accessor('chain', {
      header: 'Chain',
      cell: (info) => <ChainCell chain={info.getValue()} />,
      size: 50,
   }),
   columnHelper.accessor('amount', {
      header: 'Amount',
      cell: (info) => (
         <AmountCell
            amount={info.getValue()}
            tokenSymbol={info.row.original.tokenSymbol}
         />
      ),
      size: 150,
   }),
   columnHelper.accessor('fromAddress', {
      header: 'From',
      cell: (info) => (
         <AddressCell
            address={info.getValue()}
            chain={info.row.original.chain}
         />
      ),
   }),
   columnHelper.accessor('toAddress', {
      header: 'To',
      cell: (info) => (
         <AddressCell
            address={info.getValue()}
            chain={info.row.original.chain}
         />
      ),
   }),
   columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => <StatusCell status={info.getValue()} />,
      size: 100,
   }),
   columnHelper.accessor('timestamp', {
      header: 'Date',
      cell: (info) => <DateCell date={info.getValue()} />,
   }),
];

interface TransactionDataTableProps {
   data: TransactionDto[];
}

export const TransactionDataTable = ({ data }: TransactionDataTableProps) => {
   // eslint-disable-next-line react-hooks/incompatible-library
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
                        <Table.Head
                           key={header.id}
                           style={{
                              width: header.getSize(),
                              minWidth: header.getSize(),
                           }}
                        >
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
