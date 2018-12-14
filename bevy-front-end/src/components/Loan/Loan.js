import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../App.css';

//Components
import Footer from '../Footer';
import Form from './Form/Form.js';
import LoanP1 from './Pages/LoanP1';
import LoanP2 from './Pages/LoanP2';
import LoanP3 from './Pages/LoanP3';
import LoanP4 from './Pages/LoanP4';
import LoanP5 from './Pages/LoanP5';
import LoanP6 from './Pages/LoanP6';
import LoanP7 from './Pages/LoanP7';
import LoanP8 from './Pages/LoanP8';

class Loan extends Component {
  constructor() {
    super();
    this.state = {
      lenderName: '',
      lenderEmail: '',
      borrowerName: '',
      borrowerEmail: '',
      loanAmount: '',
      paybackStartDate: '',
      loanLengthMonths: '',
      interestRate: '',
      payments: [],

    }
  }

  handler = (e) => {

    console.log(e.target);

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='loan-container'>
        <header className='loan-header'>
            <h2>Create a Loan</h2>
        </header>
        <div className='input-container'>
            <div className="input">
                <Route exact path='/loan' render={(props) => <LoanP1 {...props} handler={this.handler} /> } />
                <Route exact path='/loan/page-2' render={(props) => <LoanP2 {...props} handler={this.handler} /> } />
                <Route exact path='/loan/page-3' render={(props) => <LoanP3 {...props} handler={this.handler} /> } />
                <Route exact path='/loan/page-4' render={(props) => <LoanP4 {...props} handler={this.handler} /> } />
                <Route exact path='/loan/page-5' render={(props) => <LoanP5 {...props} handler={this.handler} /> } />
                <Route exact path='/loan/page-6' render={(props) => <LoanP6 {...props} handler={this.handler} /> } />
                <Route exact path='/loan/page-7' render={(props) => <LoanP7 {...props} handler={this.handler} /> } />
                <Route exact path='/loan/page-8' render={(props) => <LoanP8 {...props} handler={this.handler} /> } />
            </div>
            <div className='form-container'>
                <Route exact path='/loan' component={Form} />
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Loan;