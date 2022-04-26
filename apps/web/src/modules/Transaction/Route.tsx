import {RouteObject} from 'react-router-dom';
import {TransactionPath} from './Types';
import TransactionHistory from './views';

const TransactionRoutes: RouteObject[] = [
  {
    path: TransactionPath.History,
    element: <TransactionHistory />,
  },
];
export default TransactionRoutes;
