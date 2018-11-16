import React, { Component } from 'react';
import '../../App.css';

//Components
import create from '../../assets/create.jpg';
import accept from '../../assets/accept.jpg';

class HomeFeatures extends Component {
  render() {
    return (
      <section className='home-features-container'>
       <h2>How Bevy Works</h2>
       <p>Loan origination from start to finish in five minutes</p>
       <section className='initiate-loan'>
            <img src={create} alt="person on mobile phone"/>
            <div className='initiate-text'>
                <h3>Initiate a loan and send it to the borrow</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Consectetur adipiscing elit.</p>
            </div>
        </section>
        <section className='agreement'>
            <div className="agreement-text">
                <h3>Both parties agree</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Consectetur adipiscing elit.</p>
            </div>
            <img src={accept} alt="lady looking at phone"/>
        </section>
        <section className='features'>
            <div className="feature">
                <img src="" alt=""/>
                <h4>Dashboard</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
            <div className="feature">
                <img src="" alt=""/>
                <h4>Auto Payments</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
            <div className="feature">
                <img src="" alt=""/>
                <h4>Notifications</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
            <div className="feature">
                <img src="" alt=""/>
                <h4>Tax Documents</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
            </div>
        </section>
       </section>
    );
  }
}

export default HomeFeatures;