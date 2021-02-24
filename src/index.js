import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import login from './components/login';
import about from './components/about';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDOM.render(
   <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={login} />
        <Route exact path="/About" component={about} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

