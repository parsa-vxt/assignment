import type { Transaction } from '../../../api-sdk';

interface ChainCellProps {
   chain: Transaction.Chain;
}

const chainNames: Record<Transaction.Chain, string> = {
   bnb: 'BNB',
   ethereum: 'Ethereum',
   solana: 'Solana',
};

export const ChainCell = ({ chain }: ChainCellProps) => {
   return <span>{chainNames[chain]}</span>;
};
