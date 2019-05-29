import React from 'react';
import '../styles/plans.scss';

import GetStartedNow from './Button/getStarted';

const pricing = () => {
  return (
    <div className='pricingWrapper'>
      <div className='solo'>
        <p className='heading'>SOLO</p>
        <ul className='price'>
          <li>$10</li>
          <li>PER MONTH</li>
        </ul>
        <ul className='package'>
          <li>1 Project</li>
          <li>100 Hours of Tracked Time</li>
          <li>No Team Collaborators</li>
          <li>Email Support</li>
        </ul>
        <GetStartedNow />
      </div>
      <div className='pro'>
        <p className='heading' id='pro'>
          PRO
        </p>
        <ul className='price'>
          <li>$20</li>
          <li>PER MONTH</li>
        </ul>
        <ul className='package'>
          <li>10 Projects</li>
          <li>Unlimited Hours</li>
          <li>No Team Collaborators</li>
          <li>Email Support</li>
        </ul>
        <GetStartedNow />
      </div>
      <div className='team'>
        <p className='heading'>TEAM</p>
        <ul className='price'>
          <li>$30</li>
          <li>PER MONTH</li>
        </ul>
        <ul className='package'>
          <li>Unlimited Projects</li>
          <li>Unlimited Hours</li>
          <li>5 Team Collaborators</li>
          <li>Priority Email Support</li>
        </ul>
        <GetStartedNow />
      </div>
      <p id='needHelp'>Need Help? Reach us at contact@terminal.com</p>
    </div>
  );
};

export default pricing;
