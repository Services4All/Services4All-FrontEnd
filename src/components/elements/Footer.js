import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Services4All</h4>
           <ui className="list-unstyled">
              <li>Iniciativa nacida en la Escuela Colombiana de ingenieria Julio Garavito</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <h4>Equipo</h4>
            <ui className="list-unstyled">
              <li>Esteban Bernal</li>
              <li>Andres Sotelo</li>
              <li>Juan Romero</li>
              <li>Nicolas Ortega</li>
              <li>German Ospina</li>
            </ui>
          </div>
          {/* Column3 */}
          
           <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <h4>Contact us</h4>
            <ui className="list-unstyled">
              <a
          className="App-link"
          href="https://github.com/Services4All/Services4All-FrontEnd"
          target="_blank"
          rel="noopener noreferrer"
        >
        <li>Github</li>
        </a>
               <a
          className="App-link"
          href="https://www.instagram.com/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
            <li>Instagram</li>
        </a>
             <a
          className="App-link"
          href="https://twitter.com/?lang=es"
          target="_blank"
          rel="noopener noreferrer"
        >
            <li>Twitter</li>
        </a>
            </ui>
          </div>
        </div>

        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Services4All | Todos Los Derechos Reservados |
            Terminos del Servicio | Soporte 24 horas | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;