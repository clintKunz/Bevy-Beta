import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

//Components

class Footer extends Component {

  
    subscribe = (e) => {
        const subscribeDiv = document.querySelector('.subscribe');
        subscribeDiv.classList.add('hide');

        const signupInvitationP = document.querySelector('.signup-invitation');
        signupInvitationP.textContent = 'Thanks for signing up!';

        const checkboxDiv = document.querySelector('.checkbox');
        checkboxDiv.classList.remove('hide');
    }

    render() {
    return (
      <footer className='footer-container'>
        <div className='email-signup'>
            <h2>Bevy-Beta</h2>
            <p className='signup-invitation'>Sign up for our newsletter</p>
            <div className='subscribe'>
                <input type="email" placeholder='Email Address' autoComplete='email' required/>
                <div className="btn-subscribe" onClick={this.subscribe}>
                Subscribe
                </div>
            </div>
            <div className='checkbox hide'>
                <i className="far fa-check-circle fa-3x"></i>
            </div>
            <div className="social-links">
                <a href="http://www.twitter.com" target='_blank' rel="noopener noreferrer"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="http://www.facebook.com" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook fa-lg"></i></a>
            </div>
        </div>
        <div className="footer-links">
            <h4>Company</h4>
            <Link to='/'>Home</Link>
            <Link to='/loan'>Create A Loan</Link>
            <Link to='/'>Why Bevy?</Link>
            <Link to='/login/signup'>Sign Up</Link>
        </div>
        <div className="footer-links">
            <h4>Questions</h4>
            <Link to='/'>Origination</Link>
            <Link to='/'>Payments</Link>
            <Link to='/'>Delinquency</Link>
            <Link to='/'>Tax Forms</Link>
        </div>
        <div className="footer-links">
            <h4>Legal</h4>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Use</Link>
        </div>
      </footer>
    )
  }
}

export default Footer;