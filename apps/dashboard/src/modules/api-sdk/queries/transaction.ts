import { keepPreviousData, useQuery } from '@tanstack/react-query';

import * as Operation from '../operations';
import { KEYS } from './queryKeys';

export const useGetList = (
   variables: Operation.Transaction.GetListVariables = {}
) =>
   useQuery({
      queryKey: KEYS.transaction.list(variables).queryKey,
      queryFn: () => Operation.Transaction.getTransactions(variables),
      placeholderData: keepPreviousData,
   });
