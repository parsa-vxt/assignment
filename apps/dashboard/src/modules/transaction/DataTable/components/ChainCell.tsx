import type { Transaction } from '../../../api-sdk';

import { CHAIN_MAP } from '../../constants';

interface ChainCellProps {
   chain: Transaction.Chain;
}

export const ChainCell = ({ chain }: ChainCellProps) => {
   return <span>{CHAIN_MAP[chain]}</span>;
};
