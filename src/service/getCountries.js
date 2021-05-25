const getCountries = async (filter) => {
  const response = await fetch(`${process.env.REACT_APP_URL}/${filter}`);
  if (!response.ok) return [];

  return response.json();
};

export default getCountries;
