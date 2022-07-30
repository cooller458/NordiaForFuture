import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Team from './components/pages/Team';
import About from './components/pages/About';
import RoadMap from './components/pages/RoadMap';

function App() {
  return (
    <>
      <Router>
       
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/team' component={Team} />
          <Route path='/about' component={About} />
          <Route path='/roadmap' component={RoadMap} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
