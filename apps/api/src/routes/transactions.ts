import { Hono } from 'hono';

import { transactionService } from '../services/transactionService';

export const transactionsRoute = new Hono();

transactionsRoute.get('/', (c) => {
   const { chain, status, q, page, limit } = c.req.query();

   const pageNumber = Number(page) || 1;
   const limitNumber = Number(limit) || 10;

   const results = transactionService.getTransactions(
      { chain, status, q },
      { page: pageNumber, limit: limitNumber }
   );

   return c.json(results);
});
