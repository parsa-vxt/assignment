import type { TransactionApiResponse } from './types';

import { httpClient } from '../../httpClient';
import { ROUTES } from '../../routes';
import { mapTransaction } from './mappers';

export const getTransactions = async () => {
   const data = await httpClient
      .get<TransactionApiResponse[]>(ROUTES.transaction.list)
      .json();

   return data.map(mapTransaction);
};
