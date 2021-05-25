import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getCountries from '../service/getCountries';
import switchPage from '../helpers/switchPage';

const CountriesContext = createContext();

const Provider = ({ children }) => {
  const [countriesFiltered, setCountriesFiltered] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [pageCountries, setPageCountries] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const numberOfCountries = 10;

  useEffect(async () => {
    setLoading(true);
    const responseCountries = await getCountries(filter);
    if (filter === 'all') setAllCountries(responseCountries);
    setCountriesFiltered(responseCountries);
    const totalPages = Math.ceil(responseCountries.length / numberOfCountries);
    setNumberOfPages(totalPages);
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    setPageCountries(switchPage(countriesFiltered, page));
  }, [countriesFiltered, page]);

  const context = {
    allCountries,
    pageCountries,
    countriesFiltered,
    page,
    numberOfPages,
    filter,
    loading,
    filterType,
    filterValue,
    setFilter,
    setLoading,
    setPage,
    switchPage,
    setFilterType,
    setFilterValue,
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
