import React from 'react';

import '../styles/timeTracking.scss';
import GetStartedSecondary from '../components/Button/getStartedSecondary';
import allDevices from '../images/all-devices.png';

const timeTracking = ({ heading }) => {
  return (
    <div className='timeTrackingWrapper'>
      <div className='w-container'>
        <div className='content'>
          <div>
            <p id='heading'>{heading}</p>
            <p id='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <GetStartedSecondary />
          </div>

          <img src={allDevices} alt='All devices' className='allDevices' />
        </div>
      </div>
    </div>
  );
};

export default timeTracking;
