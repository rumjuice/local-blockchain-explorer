import {RouteObject} from 'react-router-dom';
import {AccountPath} from './Types';
import {AccountList, Transfer} from './views';

const AccountRoutes: RouteObject[] = [
  {
    path: AccountPath.List,
    element: <AccountList />,
  },
  {
    path: `${AccountPath.Send}/:address`,
    element: <Transfer />,
  },
];
export default AccountRoutes;
