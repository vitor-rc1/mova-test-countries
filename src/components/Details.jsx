import React from 'react';
import PropTypes from 'prop-types';
import './Details.css';

function Details({ country }) {
  const {
    name, capital, region, subregion, population, languages,
    flag, alpha3Code,
  } = country;
  return (
    <div className="details-component">
      <img src={flag} alt={alpha3Code} className="flag" />
      <div>

        <p>
          Nome:&nbsp;
          {name}
        </p>
        <p>
          Capital:&nbsp;
          {capital}
        </p>
        <p>
          Região:&nbsp;
          {region}
        </p>
        <p>
          Sub-Região:&nbsp;
          {subregion}
        </p>
        <p>
          População:&nbsp;
          {population}
        </p>
        <p>
          Línguas:&nbsp;
          {languages.map((language) => `${language.name} `)}
        </p>
      </div>
    </div>
  );
}

Details.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    capital: PropTypes.string,
    region: PropTypes.string,
    subregion: PropTypes.string,
    population: PropTypes.number,
    flag: PropTypes.string,
    alpha3Code: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Details;
