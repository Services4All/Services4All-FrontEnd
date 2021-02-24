import './App.css';
import Main from "./components/main"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import login from './components/login';
import about from './components/about';
import comprador from './components/comprador';
import vendedor from './components/vendedor';


function App() {
  return (
	  <BrowserRouter>
		<BaseLayout>
		  <Switch>
			<Route exact path="/" component={Main} />
      <Route exact path="/Login" component={login} />
      <Route exact path="/About" component={about} />
      <Route exact path="/Comprador" component={comprador} />
      <Route exact path="/Vendedor" component={vendedor} />
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
