import './App.css';
import React from 'react';
import Main from "./components/main"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import WhiteLayout from './components/WhiteLayout';
import login from './components/login';
import about from './components/about';
import comprador from './components/comprador';
import vendedor from './components/vendedor';
import servicios from './components/servicios';
import register from './components/register';
import producto from './components/producto';
import Principal from './components/principal/index'
import Informacion from './components/principal/Informacion'

function App() {
  return (
	  <div>
		  <BrowserRouter>
			 <Switch>
			 	<Route exact path={["/Register","/principal","/principal/informacion"]}>
					<WhiteLayout>
						<Route exact path="/Register" component={register} />
						<Route exact path="/principal" component={Principal} />						
						<Route exact path="/principal/informacion" component={Informacion} />
					</WhiteLayout>
				</Route>
				<Route>
					<BaseLayout>
						<Route exact path="/" component={Main} />
						<Route exact path="/Login" component={login} />
						<Route exact path="/About" component={about} />
						<Route exact path="/Comprador" component={comprador} />
						<Route exact path="/Vendedor" component={vendedor} />
						<Route exact path="/Servicios" component={servicios} />
						<Route exact path="/producto" component={producto} />
					</BaseLayout>
				</Route>
			  </Switch>
		</BrowserRouter>
	  </div>
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
