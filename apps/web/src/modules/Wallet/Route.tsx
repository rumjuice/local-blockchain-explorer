import {RouteObject} from 'react-router-dom';
import {WalletPath} from './Types';
import MyWallet from './views';

const WalletRoutes: RouteObject[] = [
  {
    path: WalletPath.Home,
    element: <MyWallet />,
  },
];
export default WalletRoutes;
