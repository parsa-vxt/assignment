import type { Pagination, Transaction, WithPagination } from '../types';

import { fuzzyMatch, generateBase58, generateHex, randomRange } from '../utils';

const CHAINS: Transaction.Chain[] = ['ethereum', 'solana', 'bnb'];
const STATUSES: Transaction.Status[] = ['pending', 'confirmed', 'failed'];
const TOKENS: Record<Transaction.Chain, string[]> = {
   ethereum: ['ETH', 'USDT', 'USDC'],
   solana: ['SOL', 'USDC', 'RAY'],
   bnb: ['BNB', 'BUSD', 'CAKE'],
};

class TransactionService {
   private readonly transactions: Transaction[];

   constructor() {
      this.transactions = this.generateInitialData();
   }

   private generateAddress(chain: Transaction.Chain) {
      return chain === 'solana' ? generateBase58(44) : `0x${generateHex(40)}`;
   }

   private generateTxHash(chain: Transaction.Chain) {
      return chain === 'solana' ? generateBase58(88) : `0x${generateHex(64)}`;
   }

   private getGasAndFee(chain: Transaction.Chain) {
      if (chain === 'solana') {
         return { gasUsed: '0', fee: '0.000005' };
      }

      const gas = Math.floor(randomRange(21000, 100000));
      const gasPrice = chain === 'ethereum' ? randomRange(10, 50) : 5;

      return {
         gasUsed: gas.toString(),
         fee: (gas * gasPrice * 1e-9).toFixed(6),
      };
   }

   private generateInitialData() {
      const now = Date.now();
      const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;

      return Array.from({ length: 256 }, () => {
         const chain = CHAINS[Math.floor(Math.random() * CHAINS.length)];
         const tokenSymbol =
            TOKENS[chain][Math.floor(Math.random() * TOKENS[chain].length)];
         const { gasUsed, fee } = this.getGasAndFee(chain);

         return {
            tx_hash: this.generateTxHash(chain),
            chain,
            network: 'mainnet',
            from_address: this.generateAddress(chain),
            to_address: this.generateAddress(chain),
            token_symbol: tokenSymbol,
            amount: randomRange(0.01, 1000).toFixed(6),
            gas_used: gasUsed,
            fee,
            timestamp: new Date(
               now - Math.floor(Math.random() * thirtyDaysMs)
            ).toISOString(),
            status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
         } as Transaction;
      });
   }

   public getTransactions(
      filters: Transaction.Filters,
      pagination: Pagination = { page: 1, limit: 10 }
   ): WithPagination<Transaction[]> {
      const filtered = this.transactions.filter((tx) => {
         const matchesChain = !filters.chain || tx.chain === filters.chain;
         const matchesStatus = !filters.status || tx.status === filters.status;
         const matchesQ =
            !filters.q ||
            [tx.tx_hash, tx.from_address, tx.to_address, tx.token_symbol].some(
               (field) => fuzzyMatch(field, filters.q!)
            );

         return matchesChain && matchesStatus && matchesQ;
      });

      const total = filtered.length;
      const totalPages = Math.ceil(total / pagination.limit);
      const startIndex = (pagination.page - 1) * pagination.limit;
      const endIndex = startIndex + pagination.limit;

      return {
         data: filtered.slice(startIndex, endIndex),
         meta: {
            total,
            page: pagination.page,
            limit: pagination.limit,
            totalPages,
         },
      };
   }
}

export const transactionService = new TransactionService();
