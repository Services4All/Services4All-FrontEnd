import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import login from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDOM.render(
   <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={login} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

