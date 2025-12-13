import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { transactionsRoute } from './routes';

const app = new Hono();

app.use('/api/*', cors());

app.route('/api/transactions', transactionsRoute);

serve(
   {
      fetch: app.fetch,
      port: 3000,
   },
   (info) => {
      console.log(`Server is running on http://localhost:${info.port}`);
   }
);
