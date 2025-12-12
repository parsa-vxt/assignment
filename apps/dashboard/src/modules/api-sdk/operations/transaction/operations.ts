import type { GetListVariables, TransactionApiResponse } from './types';

import { httpClient } from '../../httpClient';
import { ROUTES } from '../../routes';
import { mapTransaction } from './mappers';

export const getTransactions = async (variables: GetListVariables = {}) => {
   const data = await httpClient
      .get<TransactionApiResponse[]>(ROUTES.transaction.list, {
         json: {
            chain: variables.chain,
            status: variables.status,
            q: variables.searchKeyword,
         },
      })
      .json();

   return data.map(mapTransaction);
};
