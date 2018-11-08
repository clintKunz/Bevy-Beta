import React, { Component } from 'react';
import '../App.css';;

//Components

class Navigation extends Component {
  render() {
    return (
     <nav className='.navigation'>
        <a href="#">Bevy-Beta</a>
        <a href="#">Lend</a>
        <a href="#">Borrow</a>
        <a href="#">Why Bevy?</a>
     </nav>
    );
  }
}

export default Navigation;