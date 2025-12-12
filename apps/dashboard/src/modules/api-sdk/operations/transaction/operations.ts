import type { TransactionDto } from '../../DTOs';
import type { WithPagination } from '../../types/WithPagination';
import type { GetListVariables, TransactionApiResponse } from './types';

import { httpClient } from '../../httpClient';
import { ROUTES } from '../../routes';
import { mapTransaction } from './mappers';

export const getTransactions = async (
   variables: GetListVariables = {}
): Promise<WithPagination<TransactionDto[]>> => {
   const { data, meta } = await httpClient
      .get<WithPagination<TransactionApiResponse[]>>(ROUTES.transaction.list, {
         searchParams: {
            chain: variables?.chain,
            status: variables?.status,
            q: variables?.searchKeyword,
         },
      })
      .json();

   return {
      data: data.map(mapTransaction),
      meta,
   };
};
