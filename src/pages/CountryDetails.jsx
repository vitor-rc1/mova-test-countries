import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CountriesContext } from '../context';
import Header from '../components/Header';
import Details from '../components/Details';
import Countries from '../components/Countries';
import SwitchPage from '../components/SwitchPage';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';
import switchPage from '../helpers/switchPage';
import getCountry from '../service/getCountry';
import './CountryDetails.css';

function CountryDetails({ match: { params } }) {
  const { allCountries } = useContext(CountriesContext);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageCountries, setPageCountries] = useState([{}]);

  const getNeighbors = (bordersCountries) => bordersCountries
    .map((codeCountry) => allCountries
      .find(({ alpha3Code }) => alpha3Code === codeCountry));

  useEffect(async () => {
    if (allCountries.length) {
      setLoading(true);
      setPage(1);
      const { code } = params;
      const countryResponse = await getCountry(code);
      if (countryResponse) {
        countryResponse.borders = getNeighbors(countryResponse.borders);
        setNumberOfPages(Math.ceil(countryResponse.borders.length / 10));
        setSelectedCountry(countryResponse);
      }
      setLoading(false);
    }
  }, [params, allCountries]);

  useEffect(() => {
    if (selectedCountry) {
      setPageCountries(switchPage(selectedCountry.borders, page));
    }
  }, [selectedCountry, page]);

  if (loading) return <Loading />;
  return (
    <div className="country-details">
      <Header backButton />
      {selectedCountry ? (
        <>
          <Details country={selectedCountry} />
          <p className="neighbors-text">Países Vizinhos:</p>
          <Countries countries={pageCountries} />
          <SwitchPage page={page} setPage={setPage} numberOfPages={numberOfPages} />
        </>
      ) : <NotFound />}
    </div>
  );
}

CountryDetails.propTypes = {
  match: {
    params: PropTypes.string,
  }.isRequired,
};

export default CountryDetails;
