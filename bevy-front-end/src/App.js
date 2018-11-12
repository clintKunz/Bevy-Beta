import React, { Component } from 'react';
import './App.css';

//Components
import Navigation from './components/Navigation';
import HomeCTA from './components/HomeCTA';
import PressBar from './components/PressBar';
import HomeFeatures from './components/HomeFeatures';
import HomePricing from './components/HomePricing';

class App extends Component {
  render() {
    return (
     <div className='container'>
      <header>
        <Navigation />
        <HomeCTA /> 
        <PressBar />
        <HomeFeatures />
        <HomePricing />
      </header>
     </div>
    );
  }
}

export default App;
