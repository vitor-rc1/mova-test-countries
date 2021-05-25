const getCountries = async () => {
  const response = await fetch(`${process.env.REACT_APP_URL}/all`);
  if (!response.ok) throw new Error(response.statusText);

  return response.json();
};

export default getCountries;
