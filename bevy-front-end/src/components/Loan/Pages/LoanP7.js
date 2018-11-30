import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP7 extends Component {
  render() {
    return (
      <div className=''>
        <Link to='/loan/page-6'>Back</Link>
        <Link to='/loan/page-8'>Next</Link>
      </div>
    );
  }
}

export default LoanP7;