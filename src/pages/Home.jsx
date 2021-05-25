import React, { useContext } from 'react';
import { CountriesContext } from '../context';
import Countries from '../components/Countries';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import SwitchPage from '../components/SwitchPage';
import './Home.css';

function Home() {
  const {
    loading, pageCountries, page, setPage, numberOfPages,
  } = useContext(CountriesContext);
  if (loading) return 'Carregando';
  return (
    <div className="home">
      <Header backButton={false} />
      <FilterBar />
      {pageCountries.length ? (
        <>
          <Countries countries={pageCountries} />
          <SwitchPage page={page} setPage={setPage} numberOfPages={numberOfPages} />
        </>
      ) : 'Not Found'}
    </div>
  );
}

export default Home;
