import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP3 extends Component {
  render() {
    return (
      <div className=''>
        <Link to='/loan/page-2'>Back</Link>
        <Link to='/loan/page-4'>Next</Link>
      </div>
    );
  }
}

export default LoanP3;