import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Bottombar from './components/Bottombar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Aboutme from './pages/Aboutme';
import Development from './pages/Development';
import NotFound from './pages/Notfound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Header />
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/Portfolio' component={Portfolio} exact />
        <Route path='/Aboutme' component={Aboutme} exact />
        <Route path='/Development' component={Development} exact />
        <Route component={NotFound} />
      </Switch>
      <Bottombar />
      <Footer />
    </HashRouter>
  );
}

export default App;
