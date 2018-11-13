import React, { Component } from 'react';
import '../App.css';

//Components

class References extends Component {
  render() {
    return (
      <section className='references'>
        <h2>What People Say About Bevy</h2>
        <div className="references-carousel">
				<div className="left-button">
                left
                </div>
				<div className="right-button">
                right         
                </div>
		</div>
      </section>
    );
  }
}

export default References;