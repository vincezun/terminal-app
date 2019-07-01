import React from 'react';

import '../../styles/featureTwo.scss';
import clock from '../../images/clock-icon.png';
import feather from '../../images/feather-icon.png';
import send from '../../images/send-icon.png';

const featureTwo = () => {
  return (
    <div className='featureTwoWrapper'>
      <section>
        <figure>
          <img src={clock} alt='Clock icon' className='clock icon' />
          <div>
            <figcaption className='featureName'>
              Track your time on your phone.
            </figcaption>
            <p>Vivamus sollicitudin, felis vitae facilisis.</p>
          </div>
        </figure>
        <figure>
          <img src={feather} alt='Feather icon' className='feather icon' />
          <div>
            <figcaption className='featureName'>
              Create and edit all your projects.
            </figcaption>
            <p>Vivamus sollicitudin, felis vitae facilisis mollis, diam.</p>
          </div>
        </figure>
        <figure>
          <img src={send} alt='Send icon' className='send icon' />
          <div>
            <figcaption className='featureName'>
              Send it and get paid.
            </figcaption>
            <p>Vivamus sollicitudin, felis vitae facilisis mollis.</p>
          </div>
        </figure>
      </section>
    </div>
  );
};

export default featureTwo;
