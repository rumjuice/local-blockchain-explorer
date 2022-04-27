import {ADDRESS} from '../../../Config';
import {Wallet} from '../Types';

const WalletProvider = new Wallet(ADDRESS as string, '0');

export default WalletProvider;
