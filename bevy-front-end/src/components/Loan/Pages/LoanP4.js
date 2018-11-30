import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP4 extends Component {
  render() {
    return (
      <div className=''>
        <Link to='/loan/page-3'>Back</Link>
        <Link to='/loan/page-5'>Next</Link>
      </div>
    );
  }
}

export default LoanP4;