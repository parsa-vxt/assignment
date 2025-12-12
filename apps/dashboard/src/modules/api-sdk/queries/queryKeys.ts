import { createQueryKeyStore } from '@lukemorales/query-key-factory';

import type * as Operation from '../operations';

export const KEYS = createQueryKeyStore({
   transaction: {
      list: (variables: Operation.Transaction.GetListVariables) => [variables],
   },
});
