import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

//Components

class Footer extends Component {
  render() {
    return (
      <footer className='footer-container'>
        <div className='email-signup'>
            <h2>Bevy-Beta</h2>
            <p>Sign up for our newsletter</p>
            <div className='subscribe'>
                <input type="email" placeholder='Email Address'/>
                <div className="btn-subscribe">
                Subscribe
                </div>
            </div>
            <div className="social-links">
                <a href="http://www.twitter.com" target='_blank'><i class="fab fa-twitter fa-lg"></i></a>
                <a href="http://www.facebook.com" target='_blank'><i class="fab fa-facebook fa-lg"></i></a>
            </div>
        </div>
        <div className="footer-links">
            <h4>Company</h4>
            <Link to='/'>Home</Link>
            <Link to='/'>Features</Link>
            <Link to='/'>Pricing</Link>
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