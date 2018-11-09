import React, { Component } from 'react';
import '../App.css';;

//Components

class Navigation extends Component {
  render() {
    return (
     <nav className='navigation'>
        <a href="#" className='logo'>Bevy-Beta</a>
        <div className='nav-links'>
          <a href="#">Lend</a>
          <a href="#">Borrow</a>
          <a href="#">Why Bevy?</a>
          </div>
     </nav>
    );
  }
}

export default Navigation;