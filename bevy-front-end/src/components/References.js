import React, { Component } from 'react';
import '../App.css';

//Components

class References extends Component {
  render() {
    return (
      <section className='references'>
        <h2>What People Say About Bevy</h2>
        <div class="references-carousel">
				<div class="left-button">
                left
                </div>
				<div class="right-button">
                right         
                </div>
		</div>
      </section>
    );
  }
}

export default References;