import type { Transaction } from '../../../api-sdk/types';

import { HashCell } from './HashCell';

interface AddressCellProps {
   address: string;
   chain: Transaction.Chain;
}

const getExplorerUrl = (chain: Transaction.Chain, address: string) => {
   switch (chain) {
      case 'ethereum':
         return `https://etherscan.io/address/${address}`;
      case 'bnb':
         return `https://bscscan.com/address/${address}`;
      case 'solana':
         return `https://solscan.io/account/${address}`;
   }
};

export const AddressCell = ({ address, chain }: AddressCellProps) => {
   const url = getExplorerUrl(chain, address);

   return (
      <a className="text-primary underline" href={url} target="_blank">
         <HashCell hash={address} />
      </a>
   );
};
