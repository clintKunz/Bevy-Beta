import React, { Component } from 'react';
import '../../App.css';

import { Link, Route } from 'react-router-dom';

import LoginEntry from './LoginEntry';
import SignupEntry from './SignupEntry';

class Login extends Component {
    render() {
      return (
        <section className='login-container'>
            <div className='login-or-signup'>
                <Link to='/login' className='login-btn'>Login</Link>
                <Link to='/login/signup' className='signup-btn'>Sign up</Link>
            </div>
            <Route exact path='/login' component={LoginEntry} />
            <Route exact path='/login/signup' component={SignupEntry} />
            <Link to='/' className="exit">X</Link>
        </section>
      );
    }
}
  
export default Login;