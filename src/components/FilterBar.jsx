import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CountriesContext } from '../context';
import './FilterBar.css';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 370,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      minWidth: 370,
    },
  },
}));

function FilterBar() {
  const classes = useStyles();
  const {
    setFilter, filterType, setFilterType, filterValue, setFilterValue,
  } = useContext(CountriesContext);

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
    <form className={classes.root} noValidate>
      <TextField
        onChange={({ target }) => setFilterValue(target.value)}
        value={filterValue}
        id="standard-basic"
        label="Digite um valor"
      />
    </form>
  );

  const regionValue = (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-region">Escolha uma região</InputLabel>
      <Select
        labelId="select-region"
        value={filterValue}
        onChange={({ target }) => setFilterValue(target.value)}
      >
        <MenuItem value="">Escolha uma Região</MenuItem>
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="americas">Americas</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
      </Select>
    </FormControl>
  );

  return (
    <div className="filter-bar">
      <div className="select-type">
        <FormControl className={classes.formControl}>
          <InputLabel id="select-type">Filtra por</InputLabel>
          <Select
            labelId="select-type"
            value={filterType}
            onChange={({ target }) => setFilterType(target.value)}
          >
            <MenuItem value="region">Região</MenuItem>
            <MenuItem value="capital">Capital</MenuItem>
            <MenuItem value="lang">Língua</MenuItem>
            <MenuItem value="name">País</MenuItem>
            <MenuItem value="callingcode">Código de ligação</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="select-value" hidden={filterType === ''}>
        {filterType === 'region' ? regionValue : inputValue}
      </div>
      <div className="buttons-container">
        <Button
          className="clear-button"
          onClick={clearFilter}
          color="secondary"
          variant="contained"
        >
          Limpar
        </Button>

        <Button
          className="search-button"
          onClick={fetchFilter}
          variant="contained"
        >
          Pesquisar
        </Button>
      </div>
    </div>
  );
}

export default FilterBar;
