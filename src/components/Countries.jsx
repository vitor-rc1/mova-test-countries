import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context';
import './Countries.css';

function Countries() {
  const { pageCountries } = useContext(CountriesContext);

  const countryFlag = ({ flag, alpha3Code }) => (
    <Link to={`/${alpha3Code}`}>
      <img src={flag} alt={alpha3Code} className="flag" />
    </Link>
  );
  return (
    <div className="countries-component">
      {pageCountries.map((country) => countryFlag(country))}
    </div>
  );
}

export default Countries;
