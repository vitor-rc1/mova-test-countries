import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import logoMova from '../images/logo_principal.svg';
import './Header.css';

function Header({ backButton }) {
  return (
    <div className="header-component">
      <img src={logoMova} alt="mova logo" />
      {backButton && <Link to="/"><SubdirectoryArrowLeftIcon className="arrow" /></Link>}
    </div>
  );
}

Header.propTypes = {
  backButton: PropTypes.bool.isRequired,
};

export default Header;
