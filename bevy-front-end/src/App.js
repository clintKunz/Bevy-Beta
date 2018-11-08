import React, { Component } from 'react';
import './App.css';

//Components
import WhatIsBevy from './components/WhatIsBevy';

class App extends Component {
  render() {
    return (
     <div className='.container'>
      <WhatIsBevy /> 
     </div>
    );
  }
}

export default App;
