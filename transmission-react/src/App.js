import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import SharedBrowser from './containers/SharedBrowser';
import NavBar from './containers/NavBar';

const App = () => {
  return (
      <Router>
        <NavBar/>
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
        <Route exact path='/:key' render={(routeProps) => <SharedBrowser {...routeProps} />} />
      </Router>
  );
}

export default App;


