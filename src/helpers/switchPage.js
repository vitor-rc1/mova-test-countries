const numberOfCountries = 10;

const switchPage = (countries, pageSelected) => {
  const initialIndex = (pageSelected - 1) * numberOfCountries;
  const finalIndex = initialIndex + numberOfCountries;
  return countries.slice(initialIndex, finalIndex);
};

export default switchPage;
