import React, { Component } from 'react';
import '../../App.css';

class LoginEntry extends Component {
    render() {
      return (
        <div className='login-entry'>
            <input type="text" name="username" placeholder="email address"/>
            <input type="text" name="password" placeholder="password"/>
            <div>Enter</div>
        </div>
      );
    }
}
  
export default LoginEntry;