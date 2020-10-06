import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
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
        <Route path='/Ext-projgreenhouse' component={() => {
          window.location.href = 'https://github.com/NatthanonM/EmbeddedLabProject';
          return null;
        }} />
        <Route path='/Ext-projkingtower' component={() => {
          window.location.href = 'https://github.com/karnkittik/KingTower';
          return null;
        }} />
        <Route path='/Ext-projminor' component={() => {
          window.location.href = 'https://github.com/karnkittik/MinorCineplex';
          return null;
        }} />
        <Route path='/Ext-projtutorhere' component={() => {
          window.location.href = 'https://github.com/2110423-2019-2/sec3_catandfriends';
          return null;
        }} />
        <Route path='/Ext-projchatgunkub' component={() => {
          window.location.href = 'https://github.com/2110521-2563-1-Software-Architecture/TTT-PY-Frontend';
          return null;
        }} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
