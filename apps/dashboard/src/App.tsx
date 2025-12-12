import { useState } from 'react';
import { Input, Pagination, Select } from 'ui';

import type { Transaction } from './modules/api-sdk/types';

import { Query } from './modules/api-sdk';
import {
   CHAIN_MAP,
   STATUS_MAP,
   TransactionDataTable,
} from './modules/transaction';

const CHAIN_OPTIONS = Object.entries(CHAIN_MAP).map(([key, value]) => ({
   label: value,
   value: key,
}));

const STATUS_OPTIONS = Object.entries(STATUS_MAP).map(([key, value]) => ({
   label: value,
   value: key,
}));

export default function App() {
   const [page, setPage] = useState(1);
   const [search, setSearch] = useState('');
   const [chain, setChain] = useState<Transaction.Chain | null>(null);
   const [status, setStatus] = useState<Transaction.Status | null>(null);

   const { data: queryData } = Query.Transaction.useGetList({
      page,
      searchKeyword: search,
      chain: chain ?? undefined,
      status: status ?? undefined,
      limit: 10,
   });

   const transactions = queryData?.data ?? [];
   const meta = queryData?.meta;

   return (
      <div className="mx-auto w-full max-w-7xl space-y-6 p-8">
         <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
            <p className="text-muted-foreground">
               List of suspicious transactions!
            </p>
         </div>

         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full sm:max-w-sm">
               <Input
                  value={search}
                  onChange={(event) => {
                     setSearch(event.target.value);
                     setPage(1);
                  }}
                  placeholder="Search transactions..."
               />
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
               <div className="w-full sm:w-[200px]">
                  <Select
                     value={chain}
                     onChange={(value) => {
                        setChain(value as Transaction.Chain | null);
                        setPage(1);
                     }}
                     options={CHAIN_OPTIONS}
                     placeholder="Filter by chain"
                  />
               </div>
               <div className="w-full sm:w-[200px]">
                  <Select
                     value={status}
                     onChange={(value) => {
                        setStatus(value as Transaction.Status | null);
                        setPage(1);
                     }}
                     options={STATUS_OPTIONS}
                     placeholder="Filter by status"
                  />
               </div>
            </div>
         </div>
         <TransactionDataTable data={transactions} />

         {meta ? (
            <Pagination
               currentPage={page}
               onPageChange={setPage}
               totalPages={meta.totalPages}
            />
         ) : null}
      </div>
   );
}
