import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Tac from './Tac';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tac" component={Tac} />
        </Switch>
      </Router>
    </div>
  );
}


//Home
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);



export default App;
