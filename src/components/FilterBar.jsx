import React, { useContext, useState } from 'react';
import { CountriesContext } from '../context';

function FilterBar() {
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const { setFilter } = useContext(CountriesContext);

  const fetchFilter = (event) => {
    if (event) event.preventDefault();
    setFilter(`${filterType}/${filterValue}`);
  };

  const clearFilter = () => {
    setFilter('all');
    setFilterType('');
    setFilterValue('');
  };

  const inputValue = (
    <input
      type="text"
      onChange={({ target }) => setFilterValue(target.value)}
      value={filterValue}
    />
  );

  const regionValue = (
    <select
      value={filterValue}
      onChange={({ target }) => setFilterValue(target.value)}
    >
      <option value="">Escolha uma Região</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );

  return (
    <div className="filter-bar-component">
      <select
        value={filterType}
        onChange={({ target }) => setFilterType(target.value)}
        required
      >
        <option value="">Escolha uma opção</option>
        <option value="region">Região</option>
        <option value="capital">Capital</option>
        <option value="lang">Língua</option>
        <option value="name">País</option>
        <option value="callingcode">Código de ligação</option>
      </select>

      <div hidden={filterType === ''}>
        {filterType === 'region' ? regionValue : inputValue}
      </div>

      <button
        type="submit"
        className="search-button"
        onClick={fetchFilter}
      >
        Pesquisar
      </button>

      <button
        type="button"
        className="clear-button"
        onClick={clearFilter}
      >
        Limpar
      </button>
    </div>
  );
}

export default FilterBar;
