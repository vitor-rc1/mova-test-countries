import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:code" component={CountryDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
