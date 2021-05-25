const getCountry = async (countryCode) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/alpha/${countryCode}`);
  if (!response.ok) return null;

  return response.json();
};

export default getCountry;
