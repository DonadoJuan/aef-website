import React from 'react';
import './Navbar.css'
import logo from '../../assets/aef-logo.svg'
import bars from '../../assets/menu-bars.svg'

const navbar = (props) => {

    return (
      <React.Fragment>
        <header className="aef-navbar">
          <img className="aef-navbar-logo" src={logo} alt="Logo animales en foco"/>
          <ul className="aef-navbar-menu">
            <li>Nosotros</li>
            <li>Reel</li>
            <li>Galeria</li>
            <li>Contacto</li>
          </ul>
          <img className="aef-navbar-menu-icon" src={bars} alt="" onClick={props.click}/>
        </header>
        { props.isMenuOpen ? <ul className="aef-dropdown-menu">
          <li>Nosotros</li>
          <li>Reel</li>
          <li>Galeria</li>
          <li>Contacto</li>
        </ul> : null
       }
      </React.Fragment>
      
      
    );
}

export default navbar;
