import React from 'react';

import '../styles/about.scss';
import Layout from '../components/Layout/layout';
import StartTracking from '../components/startTracking';

const about = () => {
  return (
    <Layout title='About | Terminal'>
      <div className='aboutWrapper'>
        <section>
          <div className='w-container'>
            <div>
              <div>
                <p id='heading'>3 GUYS CHANGING TIME TRACKING</p>
                <p id='description'>
                  What started as a dorm room project exploded into an internet
                  sensation!
                </p>
              </div>
              <div className='about'>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                  <p>
                    Amet, consectetur adipiscing elit. Suspendisse varius enim
                    in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare, eros dolor interdum nulla, ut commodo diam libero
                    vitae erat. Aenean faucibus nibh et justo cursus.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                  <p>
                    Ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='theTeam' />
          <div className='mediumGrayContainer'>
            <div className='w-container'>
              <p id='heading'>The Origins</p>
              <div className='origin'>
                <div>
                  <div>
                    <p className='title'>Where it started</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </p>
                  </div>
                  <div>
                    <p className='title'>Attracting users</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div>
                  <div>
                    <p className='title'>Hiring 2 guys</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                  </div>
                  <div>
                    <p className='title'>Time to take over the world</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className='title'>Why time tracking</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor.
                    </p>
                  </div>
                  <div>
                    <p className='title'>Getting investment</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                  </div>
                  <div>
                    <p className='title'>It's party time</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </p>
                  </div>
                  <div>
                    <p className='title'>To Mars and beyond</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <StartTracking />
    </Layout>
  );
};

export default about;
