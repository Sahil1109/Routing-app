import React from 'react';
import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
      <Route exact path="/about" component={About}/>
      <Route path="/" component={Home}/>
      <Route path="/shop" component={Shop}/>
    </Switch>
    </div>
    </Router>
  );
}

const Home =()=>{
  return(
    <h1>Home Page</h1>
  )
}

export default App;
