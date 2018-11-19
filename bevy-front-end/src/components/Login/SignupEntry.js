import React, { Component } from 'react';
import '../../App.css';

class SignupEntry extends Component {
    render() {
      return (
        <div className='signup-entry'>
            <input type="text" name="username" placeholder="email address"/>
            <input type="text" name="password" placeholder="create password"/>
            <div>Enter</div>
        </div>
      );
    }
}
  
export default SignupEntry;