//Dependencies
import React from 'react';
import Footer from './elements/Footer'
import NavBar from './navBar/NavBar';
import {NavLink} from 'react-router-dom';
import './comprador.css';

export default class NewComponent extends React.Component {
  render() {
    return(
      <div className="comprador">
        <div>
          <NavBar />
        </div>
        <div className="comprador-title">
          <h1>BIENVENIDO NUEVO COMPONENTE</h1>
        </div>
        <div className="itemsdos">
            <p><NavLink activeClassName="selected" className="nav-link-header" to="/">Favoritos</NavLink></p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}