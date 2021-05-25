import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Countries.css';

function Countries({ countries }) {
  const countryFlag = ({ flag, alpha3Code }) => (
    <Link to={`/${alpha3Code}`}>
      <img src={flag} alt={alpha3Code} className="flag" />
    </Link>
  );
  return (
    <div className="countries-component">
      {countries.map((country) => countryFlag(country))}
    </div>
  );
}

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Countries;
