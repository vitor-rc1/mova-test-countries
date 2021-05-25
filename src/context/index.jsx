import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getCountries from '../service/getCountries';

const CountriesContext = createContext();

const Provider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [pageCountries, setPageCountries] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const numberOfCountries = 10;

  useEffect(async () => {
    const responseCountries = await getCountries(filter);
    setCountries(responseCountries);
    const totalPages = Math.ceil(responseCountries.length / numberOfCountries);
    setNumberOfPages(totalPages);
  }, [filter]);

  useEffect(() => {
    const initialIndex = page * numberOfCountries;
    const finalIndex = initialIndex + numberOfCountries;
    const sliceCountries = countries.slice(initialIndex, finalIndex);
    setPageCountries(sliceCountries);
  }, [countries, page]);

  const context = {
    pageCountries,
    countries,
    page,
    numberOfPages,
    setFilter,
    setPage,
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
