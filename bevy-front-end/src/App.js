import React, { Component } from 'react';
import './App.css';

//Components
import Navigation from './components/Navigation';
import HomeCTA from './components/HomeCTA';
import PressBar from './components/PressBar';

class App extends Component {
  render() {
    return (
     <div className='container'>
      <header>
        <Navigation />
        <HomeCTA /> 
        <PressBar />
      </header>
     </div>
    );
  }
}

export default App;
