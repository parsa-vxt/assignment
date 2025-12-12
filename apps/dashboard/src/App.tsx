import { useEffect } from 'react';

import { Query } from './modules/api-sdk';

export default function App() {
   const { data } = Query.Transaction.useGetList();
   useEffect(() => {
      console.log(data);
   }, [data]);

   return <div className="w-full">x</div>;
}
