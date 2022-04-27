import {Navigate, Route, RouteObject, Routes} from 'react-router-dom';
import AccountRoutes from './modules/Account/Route';
import Header from './modules/Header';
import TransactionRoutes from './modules/Transaction/Route';
import {TransactionPath} from './modules/Transaction/Types';
import WalletRoutes from './modules/Wallet/Route';

function App() {
  const routes: RouteObject[] = [
    ...TransactionRoutes,
    ...WalletRoutes,
    ...AccountRoutes,
  ];

  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-auto bg-slate-50 pb-4">
      <div className="my-4 text-xl italic font-bold text-sky-900">
        Blockchain Explorer
      </div>
      <div className="container-lg w-full md:w-3/4 lg:w-3/5 max-h-max">
        <Header />
        <div className="flex flex-col gap-4">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route
              path="*"
              element={<Navigate to={TransactionPath.History} replace />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
