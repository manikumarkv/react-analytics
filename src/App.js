import logo from './logo.svg';
import './App.css';
import { useAnalytics } from 'use-analytics'


function App() {
  const { track, page, identify } = useAnalytics()
  return (
    <div className="App">
      <header className="App-header" onClick={() => {
        track('trackThing')
      }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onMouseOver={()=> {
          page()
        }} >page</button>
        <button onMouseOver={()=> {
          identify('userID', { email: 'bob@bob.com' })
        }} >identify</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
