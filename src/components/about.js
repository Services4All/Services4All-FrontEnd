//Dependencies
import React from 'react';
import Footer from './elements/Footer'
import NavBar from './navBar/NavBar';
import marketing from '../marketing.jpg';
import './about.css';

export default class about extends React.Component {
  render() {
	/* istanbul ignore next */
    return(
      <div className="about">
        <div>
          <NavBar />
        </div>
        <div className="about-title">
          <h1 className="about2">¿Que es Services4All?</h1>
          <h2 className="about3">TODOS LOS SERVICIOS QUE NECESITAS
                      AL ALCANCE DE TU MANO</h2>
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
        <div className="img">
          <img src={marketing} className="App-logo" alt="marketing" />
        </div>
        
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}



