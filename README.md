# Transaction Dashboard

A minimal dashboard for tracking suspicious transactions on BNB, Ethereum, and Solana!

## How to run?

1. **Install Dependencies**

   ```bash
   pnpm install
   ```

2. **Start API Server**

   ```bash
   cd apps/api && pnpm dev
   ```

3. **Populate dashboard app env file**

   ```bash
   cp apps/dashboard/.env.example apps/dashboard/.env
   code apps/dashboard/.env # populate the env file
   ```

   > Set `API_BASE_URL` to `http://localhost:3000`

4. **Start Dashboard App**

   ```bash
   cd apps/dashboard && pnpm dev
   ```

5. **Run Storybook (Optional)**

   ```bash
   cd apps/ui && pnpm storybook
   ```

## Features

- **Data Table**: Formatted cells for hashes, dates, and amounts
- **Filtering**: Filter by Chain or Status
- **URL Sync**: Filters and search live in the URL; You can share links or refresh without losing context
- **Fuzzy Search**: Fuzzy search for transactions

## Stack

- **Frontend**: React, Vite, TailwindCSS, TanStack Query, TanStack Table, Nuqs
- **Backend**: Hono
