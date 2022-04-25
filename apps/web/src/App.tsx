import {Route, RouteObject, Routes} from 'react-router-dom';
import logo from './logo.svg';
import Header from './modules/Header';

function App() {
  const routes: RouteObject[] = [
    {
      path: '/transaction',
      // element: <Login />,
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="absolute top-5 text-xl italic font-bold text-sky-900">
        {' '}
        Blockchain Explorer
      </div>
      <div className="container-lg w-3/5 max-w-lg rounded-xl border-2 shadow">
        {/* header */}
        <Header />
        {/* body */}
        <div className="p-4">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <input disabled={false} />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
