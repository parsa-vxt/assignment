import { useState } from 'react';
import { Input, Pagination } from 'ui';

import { Query } from './modules/api-sdk';
import { TransactionDataTable } from './modules/transaction';

export default function App() {
   const [page, setPage] = useState(1);
   const [search, setSearch] = useState('');

   const { data: queryData } = Query.Transaction.useGetList({
      page,
      searchKeyword: search,
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

         <div className="flex items-center justify-between">
            <div className="w-full max-w-sm">
               <Input
                  value={search}
                  onChange={(event) => {
                     setSearch(event.target.value);
                     setPage(1);
                  }}
                  placeholder="Search transactions..."
               />
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
