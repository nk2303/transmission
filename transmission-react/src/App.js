import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { api } from './services/api';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import SharedBrowser from './containers/SharedBrowser';
import NavBar from './containers/NavBar';


const App = (props) => {
  const [keyList, setKeyList] = useState([]);

  useEffect(() => {
      getUrls();
  }, []);

  const getUrls = () => {
    api.getUrlKeyList().then( resp => setKeyList(resp))
  }

  return (
      <Router>
        <NavBar/>
        <Route exact path='/' render={(routeProps) => <Home {...routeProps} urlKeyList={keyList} />} />
        <Route exact path='/:url_key' render={(routeProps) => 
          <SharedBrowser {...routeProps} cableApp={props.cableApp} />} />
      </Router>
  );
}

export default App;


