import React, { Component } from 'react';
import './App.css';

//Components
import Navigation from './components/Navigation';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
     <div className='container'>
        <Navigation />
        <HomePage />
        <Footer />
     </div>
    );
  }
}

export default App;
