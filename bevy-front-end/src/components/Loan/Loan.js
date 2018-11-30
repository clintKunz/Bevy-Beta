import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//Components
import Footer from '../Footer';
import LoanP1 from './Pages/LoanP1';
import LoanP2 from './Pages/LoanP2';

class Loan extends Component {
  render() {
    return (
      <div className='loan-container'>
        <header>
            <h2>Create a loan</h2>
        </header>
        <div className='input-container'>
            <div className="input">
                <Route exact path='/loan'component={LoanP1} />
                <Route exact path='/loan/page-2' component={LoanP2} />
            </div>
            <div className='form-container'>
                <p>form...</p>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Loan;