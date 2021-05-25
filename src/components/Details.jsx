import React from 'react';
import PropTypes from 'prop-types';

function Details({ country }) {
  const {
    name, capital, region, subregion, population, languages,
    flag, alpha3Code,
  } = country;
  console.log(languages);
  return (
    <div className="details-component">
      <img src={flag} alt={alpha3Code} className="flag" />
      <p>
        Nome:
        {name}
      </p>
      <p>
        Capital:
        {capital}
      </p>
      <p>
        Região:
        {region}
      </p>
      <p>
        Sub-Região:
        {subregion}
      </p>
      <p>
        População:
        {population}
      </p>
      <p>
        Línguas:
        {languages.map((language) => `${language.name} `)}
      </p>
    </div>
  );
}

Details.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    capital: PropTypes.string,
    region: PropTypes.string,
    subregion: PropTypes.string,
    population: PropTypes.string,
    flag: PropTypes.string,
    alpha3Code: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Details;
