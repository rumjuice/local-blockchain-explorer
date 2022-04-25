import logo from './logo.svg';
import Header from './modules/Header';

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="container-lg w-3/5 max-w-lg rounded-lg border-2 shadow">
        {/* header */}
        <Header />
        {/* body */}
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
  );
}

export default App;
