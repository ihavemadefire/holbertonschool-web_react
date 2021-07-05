import logo from '../assets/holbie_logo.jpeg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';
import {Notifications} from '../Notifications/Notifications'

function App() {
  return (
    <div className="App">
        <div id='root-notifications'>
          {Notifications()}
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email: </label>
          <input type="email" id="email"></input>
          <label for="password">Password: </label>
          <input type="password" id="password"></input>
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
