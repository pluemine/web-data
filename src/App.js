import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
        <Switch>
          <Route path='/home' component={Home} exact />
        </Switch>
      </Router>
  );
}

export default App;
