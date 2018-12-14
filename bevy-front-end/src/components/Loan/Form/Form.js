import React, { Component } from 'react';

//Components

class Form extends Component {
    render() {
      return (
        <div className='form'>
            <p>Lender: {this.props.lenderName}<br/>Borrower: {this.props.borrowerName}</p>
        </div>
      );
    }
  }
  
  export default Form;