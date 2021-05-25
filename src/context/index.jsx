import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getCountries from '../service/getCountries';

const Countries = createContext();

const Provider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    setCountries(await getCountries());
  }, []);

  const context = {
    countries,
  };

  return (
    <Countries.Provider value={context}>
      { children }
    </Countries.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export { Countries, Provider };
