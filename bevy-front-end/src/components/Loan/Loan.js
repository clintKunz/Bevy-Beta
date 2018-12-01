import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../App.css';

//Components
import Footer from '../Footer';
import LoanP1 from './Pages/LoanP1';
import LoanP2 from './Pages/LoanP2';
import LoanP3 from './Pages/LoanP3';
import LoanP4 from './Pages/LoanP4';
import LoanP5 from './Pages/LoanP5';
import LoanP6 from './Pages/LoanP6';
import LoanP7 from './Pages/LoanP7';
import LoanP8 from './Pages/LoanP8';

class Loan extends Component {
  render() {
    return (
      <div className='loan-container'>
        <header className='loan-header'>
            <h2>Create a Loan</h2>
        </header>
        <div className='input-container'>
            <div className="input">
                <Route exact path='/loan'component={LoanP1} />
                <Route exact path='/loan/page-2' component={LoanP2} />
                <Route exact path='/loan/page-3' component={LoanP3} />
                <Route exact path='/loan/page-4' component={LoanP4} />
                <Route exact path='/loan/page-5' component={LoanP5} />
                <Route exact path='/loan/page-6' component={LoanP6} />
                <Route exact path='/loan/page-7' component={LoanP7} />
                <Route exact path='/loan/page-8' component={LoanP8} />
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