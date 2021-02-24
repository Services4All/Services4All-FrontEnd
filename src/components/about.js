//Dependencies
import React from 'react';
import Footer from './elements/Footer'
import NavBar from './navBar/NavBar';
import './about.css';

export default class about extends React.Component {
  render() {
    return(
      <div className="about">
        <div>
          <NavBar />
        </div>
        <div className="about-title">
          <h1>About</h1>
        </div>
        <div className="items">
          <textPath>
            Services4All es una sencilla plataforma de venta de servicios en tiempo real 
            que permite ofrecer y adquirir servicios, donde el usuario tiene la posibilidad 
            de negociar con el vendedor. Services4All te ofrece la posibilidad de poner servicios en línea. 
            Una herramienta útil de fácil acceso para facilitar los emprendimientos y suplir las 
            necesidades de los usuarios a cualquier momento y al alcance de un solo click.

            Encontraras facilidades de busqueda como servicios directos, perfiles de usuarios y configuracion de tu cuenta.
          </textPath>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}



