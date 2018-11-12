import React, { Component } from 'react';
import './App.css';

//Components
import Navigation from './components/Navigation';
import HomeCTA from './components/HomeCTA';
import PressBar from './components/PressBar';
import HomeFeatures from './components/HomeFeatures';

class App extends Component {
  render() {
    return (
     <div className='container'>
      <header>
        <Navigation />
        <HomeCTA /> 
        <PressBar />
        <HomeFeatures />
      </header>
     </div>
    );
  }
}

export default App;
