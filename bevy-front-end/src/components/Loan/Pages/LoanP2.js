import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP2 extends Component {
  render() {
    return (
      <div className=''>
        <Link to='/loan'>Back</Link>
        <Link to='/loan/page-3'>Next</Link>
      </div>
    );
  }
}

export default LoanP2;