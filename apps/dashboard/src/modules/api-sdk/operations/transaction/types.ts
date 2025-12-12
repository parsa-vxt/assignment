import type { Iso8601DateTime, Transaction } from '../../types';

export interface TransactionApiResponse {
   tx_hash: string;
   chain: Transaction.Chain;
   network: string;
   from_address: string;
   to_address: string;
   token_symbol: string;
   amount: string;
   gas_used: string;
   fee: string;
   timestamp: Iso8601DateTime;
   status: Transaction.Status;
}
