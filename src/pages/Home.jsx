import React from 'react';
import Countries from '../components/Countries';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import SwitchPage from '../components/SwitchPage';

function Home() {
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
