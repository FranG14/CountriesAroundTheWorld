import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Home from './components/home/home'
import CountryCards from './components/countriesList/main';
import CountryDetail from './components/countryDetail/countryDetail'
import Activities from './components/activities';


function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/countries" component={CountryCards} />
      <Route path="/country/:id" component={CountryDetail} />
      <Route path="/activities/new" component={Activities} />
    </React.Fragment>
  );
}

export default App;
