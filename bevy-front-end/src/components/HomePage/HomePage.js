import React, { Component } from 'react';
import '../../App.css';

import HomeCTA from './HomeCTA';
import PressBar from './PressBar';
import HomeFeatures from './HomeFeatures';
import HomePricing from './HomePricing';
import References from './References';


class HomePage extends Component {
    render() {
      return (
        <div className='container'>
            <HomeCTA />
            <PressBar />
            <HomeFeatures />
            <HomePricing />
            <References /> 
        </div>
      );
    }
}
  
export default HomePage;