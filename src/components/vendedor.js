//Dependencies
import React from 'react';
import Footer from './elements/Footer'
import NavBar from './navBar/NavBar';
import {NavLink} from 'react-router-dom';
import './vendedor.css';

export default class vendedor extends React.Component {
  render() {
    return(
      <div className="vendedor">
        <div>
          <NavBar />
        </div>
        <div className="vendedor-title">
          <h1>BIENVENIDO VENDEDOR</h1>
        </div>
        <div className="itemstres">
            <p><NavLink activeClassName="selected" className="nav-link-header" to="/">Mis Servicios</NavLink></p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}