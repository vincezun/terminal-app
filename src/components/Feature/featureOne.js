import React from 'react';

import '../../styles/featureOne.scss';
import record from '../../images/record-icon.png';
import play from '../../images/play-icon.png';
import pause from '../../images/pause-icon.png';

const featureOne = () => {
  return (
    <div className='featureOneWrapper'>
      <section>
        <figure>
          <img src={record} alt='Record icon' className='record icon' />
          <div>
            <figcaption className='featureName'>Record your work.</figcaption>
            <p>Vivamus sollicitudin, felis vitae facilisis.</p>
          </div>
        </figure>
        <figure>
          <img src={play} alt='Play icon' className='play icon' />
          <div>
            <figcaption className='featureName'>Play it back.</figcaption>
            <p>Vivamus sollicitudin, felis vitae facilisis mollis, diam.</p>
          </div>
        </figure>
        <figure>
          <img src={pause} alt='Pause icon' className='pause icon' />
          <div>
            <figcaption className='featureName'>
              Pause at any moments.
            </figcaption>
            <p>Vivamus sollicitudin, felis vitae facilisis mollis.</p>
          </div>
        </figure>
      </section>
    </div>
  );
};

export default featureOne;
