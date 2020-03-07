import React from 'react';
import './App.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import OddsContainer from './components/OddsContainer';
import Navbar from './components/Navbar';
import About from './components/About';
import Calculator from './components/Calculator';
require('dotenv').config();

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Router>
        <Route exact path='/' component={OddsContainer} />
        <Route path='/about' component={About} />
        <Route path='/calculator' component={Calculator} />
      </Router>
    </div>
  );
}

export default App;
