import React, { Component } from 'react';
import '../App.css';

//Components

class HomeCTA extends Component {
  render() {
    return (
      <section className='home-cta-container'>
        <div className='cta-text'>
          <h2>Bevy makes family lending less awkward</h2>
          <p>Customize the terms then let Bevy take care of the rest</p>
          <div className='btn sign-up'>Sign Up</div>
          <div className='btn learn-more'>Learn More</div>
        </div>
        <div className='cta-image'>
          <img src="" alt=""/>
        </div>
      </section>
    );
  }
}

export default HomeCTA;
