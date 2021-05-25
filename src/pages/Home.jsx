import React from 'react';
import Countries from '../components/Countries';
import Header from '../components/Header';
import SwitchPage from '../components/SwitchPage';

function Home() {
  return (
    <div className="home">
      <Header />
      <Countries />
      <SwitchPage />
    </div>
  );
}

export default Home;
