import React from 'react';
import SEO from '../components/seo';

import '../styles/services.scss';
import Layout from '../components/Layout/layout';
import StartTracking from '../components/startTracking';
import TimeTracking from '../components/timeTracking';
import FeatureOne from '../components/Feature/featureOne';
import FeatureTwo from '../components/Feature/featureTwo';
import EmailSupport from '../components/emailSupport';

const services = () => {
  return (
    <Layout>
      <SEO title='Services' />
      <div className='servicesWrapper'>
        <section>
          <div className='w-container'>
            <div>
              <div>
                <p className='subHeading'>Our Services</p>
                <p className='description'>
                  What started as a dorm room project exploded into an internet
                  sensation!
                </p>
              </div>
              <div className='ourServices'>
                <div className='service'>
                  <p className='number'>1.</p>
                  <p className='serviceTitle'>TIME TRACKING</p>
                  <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
                <div className='service'>
                  <p className='number'>2.</p>
                  <p className='serviceTitle'>CLOUD HOSTING</p>
                  <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
                <div className='service'>
                  <p className='number'>3.</p>
                  <p className='serviceTitle'>BOOKING</p>
                  <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <TimeTracking heading='Time Tracking' />
        </section>
        <section>
          <div className='w-container'>
            <div>
              <FeatureOne />
            </div>
            <div>
              <p className='heading'>Cloud Hosting</p>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='w-container'>
            <div>
              <p className='heading'>Booking</p>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </p>
              <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.
              </p>
            </div>
            <div>
              <FeatureTwo />
            </div>
          </div>
        </section>
        <section>
          <EmailSupport heading="Also: Rockin' Support " />
        </section>
      </div>
      <StartTracking />
    </Layout>
  );
};

export default services;
