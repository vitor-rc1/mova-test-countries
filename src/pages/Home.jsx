import React, { useContext } from 'react';
import { CountriesContext } from '../context';
import Countries from '../components/Countries';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import SwitchPage from '../components/SwitchPage';

function Home() {
  const { loading } = useContext(CountriesContext);
  if (loading) return '';
  return (
    <div className="home">
      <Header backButton={false} />
      <FilterBar />
      <Countries />
      <SwitchPage />
    </div>
  );
}

export default Home;
