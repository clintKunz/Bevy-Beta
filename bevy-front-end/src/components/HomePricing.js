import React, { Component } from 'react';
import '../App.css';

//Components

class HomePricing extends Component {
  render() {
    return (
      <section className='home-pricing-container'>
       <h2>Plans & Pricing</h2>
       <p>Free for first $2,000 loaned. After that we'll charge a 1% fee upon loan origination, that's it. If you're not satisfied you get your money back.</p>
      </section>
    );
  }
}

export default HomePricing;