import menu from '../assets/menu.png';
import React, { Component } from 'react';
import '../App.css';;

//Components

class Navigation extends Component {
  render() {
    return (
     <header>
        <nav className='navigation'>
          <h1>
          <a href="#" className='logo'>Bevy-Beta</a>
          </h1>
          <div className="nav-links-menu">
            <img src={menu} alt="navigation menu"/>
          </div>
          <div className='nav-links'>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Why Bevy?</a>
            <a href="#">Log In</a>
          </div>
        </nav>
     </header>
    );
  }
}

export default Navigation;