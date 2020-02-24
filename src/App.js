import React from 'react';
import './App.min.css';
import OddsContainer from './components/OddsContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <OddsContainer />
    </div>
  );
}

export default App;
