import React, { Component } from 'react';
import './App.css';

//React-router-dom
import { Route } from 'react-router-dom';

//Components
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Loan from './components/Loan/Loan';
import WhyBevy from './components/WhyBevy/WhyBevy';

class App extends Component {
  render() {
    return (
     <div className='container'>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/loan' component={Loan} />
        <Route path='/why-bevy' component={WhyBevy} />
     </div>
    );
  }
}

export default App;
