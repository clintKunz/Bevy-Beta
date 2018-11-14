import React, { Component } from 'react';
import './App.css';

//React-router-dom
import { Route } from 'react-router-dom';

//Components
import Navigation from './components/Navigation';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
     <div className='container'>
        <Navigation />
        <Route exact path='/' component={HomePage} />
        <Footer />
     </div>
    );
  }
}

export default App;
