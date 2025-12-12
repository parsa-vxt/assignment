import type { Transaction } from '../types';

export interface TransactionDto {
   txHash: string;
   chain: Transaction.Chain;
   network: string;
   fromAddress: string;
   toAddress: string;
   tokenSymbol: string;
   amount: string;
   gasUsed: string;
   fee: string;
   timestamp: Date;
   status: Transaction.Status;
}
