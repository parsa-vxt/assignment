import type { TransactionDto } from '../../DTOs';
import type { TransactionApiResponse } from './types';

export const mapTransaction = (
   data: TransactionApiResponse
): TransactionDto => ({
   ...data,
   fromAddress: data.from_address,
   gasUsed: data.gas_used,
   toAddress: data.to_address,
   tokenSymbol: data.token_symbol,
   txHash: data.tx_hash,
   timestamp: new Date(data.timestamp),
});
