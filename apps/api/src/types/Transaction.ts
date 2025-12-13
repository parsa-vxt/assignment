export interface Transaction {
   tx_hash: string;
   chain: Transaction.Chain;
   network: string;
   from_address: string;
   to_address: string;
   token_symbol: string;
   amount: string;
   gas_used: string;
   fee: string;
   timestamp: string;
   status: Transaction.Status;
}

export namespace Transaction {
   export interface Filters {
      chain?: string;
      status?: string;
      q?: string;
   }

   export type Chain = 'bnb' | 'ethereum' | 'solana';

   export type Status = 'confirmed' | 'failed' | 'pending';
}
