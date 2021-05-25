import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getCountries from '../service/getCountries';

const CountriesContext = createContext();

const Provider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(async () => {
    setCountries(await getCountries(filter));
  }, [filter]);

  const context = {
    countries,
    setFilter,
  };

  return (
    <CountriesContext.Provider value={context}>
      { children }
    </CountriesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export { CountriesContext, Provider };
