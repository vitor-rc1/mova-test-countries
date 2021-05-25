import React from 'react';
import { Link } from 'react-router-dom';
import logoMova from '../images/logo_principal.svg';
import './Header.css';

function Header() {
  return (
    <div className="header-component">
      <img src={logoMova} alt="mova logo" />
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Header;
