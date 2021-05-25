import React, { useContext } from 'react';
import { CountriesContext } from '../context';
import './Countries.css';

function Countries() {
  const { pageCountries } = useContext(CountriesContext);

  const countryFlag = ({ flag, alpha3Code }) => (
    <div className="flag">
      <img src={flag} alt={alpha3Code} />
    </div>
  );
  return (
    <div className="countries-component">
      {pageCountries.map((country) => countryFlag(country))}
    </div>
  );
}

export default Countries;
