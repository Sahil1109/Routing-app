import React from 'react';
import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Shop/>
    <About/>
    </div>
  );
}

export default App;
