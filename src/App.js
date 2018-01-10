import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import About from './pages/About.js';
import Contact from './pages/Contact.js';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron title="Welcome" subtitle="Put something witty here!" />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
