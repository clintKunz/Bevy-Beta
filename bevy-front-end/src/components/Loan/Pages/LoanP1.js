import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP1 extends Component {
    render() {
      return (
        <div className=''>
          <Link to='/loan/page-2'>Next</Link>
        </div>
      );
    }
  }
  
  export default LoanP1;