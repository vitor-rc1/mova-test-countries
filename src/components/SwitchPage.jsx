import React, { useContext } from 'react';
import { CountriesContext } from '../context';

function SwitchPage() {
  const { page, setPage, numberOfPages } = useContext(CountriesContext);

  const generateButtons = () => {
    const buttons = [];
    const firstPageButton = (
      <button
        className="page-button start-end"
        type="button"
        onClick={() => setPage(0)}
      >
        {'<'}
      </button>
    );
    buttons.push(firstPageButton);
    for (let item = 0; item < numberOfPages; item += 1) {
      const pageNumberButton = (
        <button
          className={`page-button number ${page === item && 'selected'}`}
          type="button"
          onClick={() => setPage(item)}
        >
          {item + 1}
        </button>
      );
      buttons.push(pageNumberButton);
    }
    const lastPageButton = (
      <button
        className="page-button start-end"
        type="button"
        onClick={() => setPage(numberOfPages - 1)}
      >
        {'>'}
      </button>
    );
    buttons.push(lastPageButton);
    return buttons;
  };

  return (
    <div className="switch-page-component">
      {generateButtons()}
    </div>
  );
}

export default SwitchPage;
