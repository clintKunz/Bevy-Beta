import React, { Component } from 'react';
import './App.css';

//React-router-dom
import { Route } from 'react-router-dom';

//Components
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Loan from './components/Loan/Loan';

class App extends Component {
  render() {
    return (
     <div className='container'>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/loan' component={Loan} />
     </div>
    );
  }
}

export default App;
