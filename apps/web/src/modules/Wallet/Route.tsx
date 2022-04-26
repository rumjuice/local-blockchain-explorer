import {RouteObject} from 'react-router-dom';
import {WalletPath} from './Types';
import Wallet from './views/MyWallet';

const WalletRoutes: RouteObject[] = [
  {
    path: WalletPath.Home,
    element: <Wallet />,
  },
];
export default WalletRoutes;
