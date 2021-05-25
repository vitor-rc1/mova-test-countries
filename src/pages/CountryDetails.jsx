import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getCountry from '../service/getCountry';
import Details from '../components/Details';

function CountryDetails({ match: { params } }) {
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const { code } = params;
    const countryResponse = await getCountry(code);
    setSelectedCountry(countryResponse);
    setLoading(false);
  }, [params]);

  if (loading) return '';
  return (
    <div className="country-details">
      <Header backButton />
      {selectedCountry && <Details country={selectedCountry} /> }
    </div>
  );
}

CountryDetails.propTypes = {
  match: {
    params: PropTypes.string,
  }.isRequired,
};

export default CountryDetails;
