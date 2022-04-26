import {RouteObject} from 'react-router-dom';
import TransactionHistory from './views';

export enum TransactionPath {
  History = '/transaction',
}
const TransactionRoutes: RouteObject[] = [
  {
    path: TransactionPath.History,
    element: <TransactionHistory />,
  },
];
export default TransactionRoutes;
