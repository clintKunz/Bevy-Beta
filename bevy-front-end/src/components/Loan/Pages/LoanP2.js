import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP2 extends Component {
  render() {
    return (
      <div className=''>
        <h3>Loan Amount</h3>
        <input type="number" name="loanAmount" placeholder="$Amount" onChange={this.props.handler}/>
        <h4>Payback Start Date</h4>
        <input type="date" name="paybackStartDate" onChange={this.props.handler}/>
        <h4>Loan Length</h4>
        <select>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
        <input type="number" name="loanLengthMonths" placeholder="Length" onChange={this.props.handler}/>
        <h4>Interest Rate</h4>
        <input type="number" name="interestRate" placeholder="5%" onChange={this.props.handler}/>
        <br/>
        <Link to='/loan'>Back</Link>
        <Link to='/loan/page-3'>Next</Link>
      </div>
    );
  }
}

export default LoanP2;