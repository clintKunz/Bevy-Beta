import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP5 extends Component {
  render() {
    return (
      <div className=''>
        <Link to='/loan/page-4'>Back</Link>
        <Link to='/loan/page-6'>Next</Link>
      </div>
    );
  }
}

export default LoanP5;