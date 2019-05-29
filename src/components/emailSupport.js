import React from 'react';

import '../styles/emailSupport.scss';
import GetSupport from './Button/getSupport';

const emailSupport = ({ heading }) => {
  return (
    <div className='emailSupportWrapper'>
      <div className='bagAndHands' />
      <div className='w-container'>
        <div className='support'>
          <p id='heading'>{heading}</p>
          <p id='description'>
            Our support is pretty cool. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et
            justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
            tristique posuere.
          </p>
          <GetSupport />
        </div>
      </div>
    </div>
  );
};

export default emailSupport;
