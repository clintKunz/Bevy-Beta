import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

//Components
import Footer from '../Footer';

class HomeCTA extends Component {
  render() {
    return (
      <div className='loan-container'>
        <header>
            <h2>Create a loan</h2>
        </header>
        <div className=''>
            <div className="input">
                <input type="text"/>
            </div>
            <div className="form">
                <p>form...</p>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeCTA;