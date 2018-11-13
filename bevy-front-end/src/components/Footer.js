import React, { Component } from 'react';
import '../App.css';

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
            <div className="social-links">twitter, facebook</div>
        </div>
        <div className="footer-links">
            <h4>Company</h4>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Why Bevy?</a>
            <a href="#">Sign Up</a>
        </div>
        <div className="footer-links">
            <h4>Questions</h4>
            <a href="#">Origination</a>
            <a href="#">Payments</a>
            <a href="#">Delinquency</a>
            <a href="#">Tax Forms</a>
        </div>
        <div className="footer-links">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
        </div>
      </footer>
    )
  }
}

export default Footer;