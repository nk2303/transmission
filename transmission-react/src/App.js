import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import SharedBrowser from './containers/SharedBrowser';
import NavBar from './containers/NavBar';


const App = (props) => {
  const { cableApp } = props;
  console.log(props.cableApp);
  return (
      <Router>
        <NavBar/>
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} />} />
        <Route exact path='/:url_key' render={(routeProps) => <SharedBrowser {...routeProps} cableApp={props.cableApp} />} />
      </Router>
  );
}

export default App;


