const getCountry = async (countryCode) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/alpha/${countryCode}`);
  if (!response.ok) return 'Not found';

  return response.json();
};

export default getCountry;
