import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

//Components

class HomeCTA extends Component {
  render() {
    return (
      <section className='home-cta-container'>
        <div className='cta-text'>
          <h2>Bevy makes family lending less awkward</h2>
          <p>Customize the terms then let Bevy take care of the rest</p>
          <Link to='/sign-up' className='btn sign-up'>Sign Up</Link>
          <Link to='/why-bevy' className='btn learn-more'>Learn More</Link>
        </div>
        <div className='cta-image'>
          <img src="" alt=""/>
        </div>
      </section>
    );
  }
}

export default HomeCTA;
