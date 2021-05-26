import React, { useContext } from 'react';
import { CountriesContext } from '../context';
import Countries from '../components/Countries';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import SwitchPage from '../components/SwitchPage';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

import './Home.css';

function Home() {
  const {
    loading, pageCountries, page, setPage, numberOfPages,
  } = useContext(CountriesContext);
  if (loading) return <Loading />;
  return (
    <div className="home">
      <Header backButton={false} />
      <FilterBar />
      {pageCountries.length ? (
        <>
          <Countries countries={pageCountries} />
          <SwitchPage page={page} setPage={setPage} numberOfPages={numberOfPages} />
        </>
      ) : <NotFound />}
    </div>
  );
}

export default Home;
