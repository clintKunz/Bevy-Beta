import menu from '../assets/menu.png';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../App.css';;

class Navigation extends Component {
  render() {
    return (
     <header>
        <nav className='navigation'>
          <h1>
          <Link to='/' className='logo'>Bevy-Beta</Link>
          </h1>
          <div className="nav-links-menu">
            <img src={menu} alt="navigation menu"/>
          </div>
          <div className='nav-links'>
            <Link to='/features'>Features</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/why-bevy'>Why Bevy?</Link>
            <Link to='/login'>Log In</Link>
          </div>
        </nav>
     </header>
    );
  }
}

export default Navigation;