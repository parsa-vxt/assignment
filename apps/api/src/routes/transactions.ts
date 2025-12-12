import { Hono } from 'hono';
import { transactionService } from '../services/transactionService';

export const transactionsRoute = new Hono();

transactionsRoute.get('/', (c) => {
   const { chain, status, q } = c.req.query();

   const results = transactionService.getTransactions({ chain, status, q });

   return c.json(results);
});
