import React, { Component } from 'react';
import '../../App.css';

import Navigation from '../Navigation';
import Footer from '../Footer';

class WhyBevy extends Component {
    render() {
      return (
        <div className='home-container'>
            <Navigation />
            
            <Footer />
        </div>
      );
    }
}
  
export default WhyBevy;