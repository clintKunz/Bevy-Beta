import React, { Component } from 'react';
import '../App.css';;

//Components

class Navigation extends Component {
  render() {
    return (
     <nav className='navigation'>
        <a href="#" className='logo'>Bevy-Beta</a>
        <div className='nav-links'>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Why Bevy?</a>
          <a href="#">Sign Up</a>
        </div>
     </nav>
    );
  }
}

export default Navigation;