import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components

class LoanP1 extends Component {
    render() {
      return (
        <div className=''>
          <h3>Lender's Name</h3>
          <input type="text" placeholder="Name"/>
          <h4>Lender's Email</h4>
          <input type="text" placeholder="Email"/>
          <h3>Borrow's Name</h3>
          <input type="text" placeholder="Name"/>
          <h4>Borrow's Email</h4>
          <input type="text" placeholder="Email"/>
          <Link to='/loan/page-2'>Next</Link>
        </div>
      );
    }
  }
  
  export default LoanP1;