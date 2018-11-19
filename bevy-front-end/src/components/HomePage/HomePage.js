import React, { Component } from 'react';
import '../../App.css';

import HomeCTA from './HomeCTA';
import PressBar from './PressBar';
import HomeFeatures from './HomeFeatures';
import HomePricing from './HomePricing';
import References from './References';

import Navigation from '../Navigation';
import Footer from '../Footer';

class HomePage extends Component {
    render() {
      return (
        <div className='home-container'>
            <Navigation />
            <HomeCTA />
            <PressBar />
            <HomeFeatures />
            <HomePricing />
            <References /> 
            <Footer />
        </div>
      );
    }
}
  
export default HomePage;