import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
  <header>
    <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='Logo de la empresa' />
        </Link>
      </div>
    <h1>Bienvenidos a la web</h1>

    <nav>
      <a href="/">Inicio</a>
      <a href="/productos">Productos</a>
      <a href="/login">Iniciar Sesion</a>
      <a href="/informacion">Sobre nosotros</a>
    </nav>
  </header>
  );
};

export default Header;
