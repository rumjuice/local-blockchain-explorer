import {Navigate, Route, RouteObject, Routes} from 'react-router-dom';
import Header from './modules/Header';
import TransactionRoutes, {TransactionPath} from './modules/Transaction/Route';

function App() {
  const routes: RouteObject[] = [...TransactionRoutes];

  return (
    <div className="flex flex-col justify-center items-center h-full w-screen overflow-auto bg-slate-50 pb-4">
      <div className="my-4 text-xl italic font-bold text-sky-900">
        Blockchain Explorer
      </div>
      <div className="container-lg w-full max-w-max max-h-max">
        {/* header */}
        <Header />
        {/* body */}
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
