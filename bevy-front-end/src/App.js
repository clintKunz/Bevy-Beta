import React, { Component } from 'react';
import './App.css';

//React-router-dom
import { Route } from 'react-router-dom';

//Components
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
     <div className='container'>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
     </div>
    );
  }
}

export default App;
