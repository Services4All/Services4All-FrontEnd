import './App.css';
import Main from "./components/main"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import login from './components/login';

function App() {
  return (
	  <BrowserRouter>
		<BaseLayout>
		  <Switch>
			<Route exact path="/" component={Main} />
      <Route exact path="/Login" component={login} />
		  </Switch>
		</BaseLayout>
	  </BrowserRouter>
  /**
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
	*/
  );
}

export default App;
