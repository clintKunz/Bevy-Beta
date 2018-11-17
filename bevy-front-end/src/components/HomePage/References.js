import React, { Component } from 'react';
import '../../App.css';

//Components
import feedback from '../../assets/feedback.jpg';

class References extends Component {
  render() {
    return (
      <section className='references'>
        <h2>What People Say About Bevy</h2>
        <div className="references-carousel">
          <div className="left-button">
            {'<'}        
          </div>
          <img src={feedback} alt="chalkboard with feedback written on it"/>
          <div className="right-button">
            {'>'}         
          </div>
	    	</div>
      </section>
    );
  }
}

export default References;