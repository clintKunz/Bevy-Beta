import React, { Component } from 'react';
import '../../App.css';

//images
import bloomberg from '../../assets/bloomberg.png';
import forbes from '../../assets/forbes.png';

class PressBar extends Component {
  render() {
    return (
      <section className='press-bar'>
        <h3>IN THE PRESS</h3>
        <div className="press-logos">
            <img src={bloomberg} alt="bloomberg logo" className='text-logo'/>
            <img src={forbes} alt="economist logo" className='text-logo'/>
        </div>
      </section>
    );
  }
}

export default PressBar;