import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CountrieDetails from './pages/CountrieDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:code" component={CountrieDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
