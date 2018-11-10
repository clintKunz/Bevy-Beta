import React, { Component } from 'react';
import './App.css';

//Components
import Navigation from './components/Navigation';
import WhatIsBevy from './components/WhatIsBevy';

class App extends Component {
  render() {
    return (
     <div className='container'>
      <header>
        <Navigation />
        <WhatIsBevy /> 
      </header>
     </div>
    );
  }
}

export default App;
