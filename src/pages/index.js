import React, { Component } from 'react';
import Layout from '../components/Layout/layout';
import '../styles/index.scss';

import GetStartedPrimary from '../components/Button/getStartedPrimary';
import LearnMore from '../components/Button/LearnMore';

import blackIpad from '../images/black-ipad.png';
import forbes from '../images/forbes-logo.svg';
import fastcompany from '../images/fastcompany-logo.svg';
import wired from '../images/wired-logo.svg';
import zdnet from '../images/zdnet-logo.svg';
import techcrunch from '../images/techcrunch-logo.svg';
import iPhoneFlat from '../images/iPhone-flat.png';

import FeatureOne from '../components/Feature/featureOne';
import FeatureTwo from '../components/Feature/featureTwo';
import Plans from '../components/plans';
import TimeTracking from '../components/timeTracking';
import EmailSupport from '../components/emailSupport';

class index extends Component {
  render() {
    return (
      <Layout title='Terminal'>
        <div className='homeWrapper'>
          <section>
            <div className='w-container'>
              <p id='smallHeading'>TIME TRACKING IS NOW</p>
              <h1>BEAUTIFUL & POWERFUL</h1>
              <p>
                Terminal is time tracking web app and iPhone app that will
                change your life.
              </p>
              <div className='btns'>
                <GetStartedPrimary />
                <LearnMore />
              </div>
              <div className='imgCrop'>
                <img src={blackIpad} alt='Black Ipad' className='blackIpad' />
              </div>
            </div>
          </section>
          <section>
            <div className='w-container'>
              <p>IN THE PRESS</p>
              <div className='press'>
                <img src={forbes} alt='Forbes logo' className='forbes logo' />
                <img
                  src={fastcompany}
                  alt='Fast Company logo'
                  className='fastCompany logo'
                />
                <img src={wired} alt='Wired logo' className='wired logo' />
                <img src={zdnet} alt='ZDNet logo' className='zdnet logo' />
                <img
                  src={techcrunch}
                  alt='TechCrunch logo'
                  className='techCrunch logo'
                />
              </div>
            </div>
          </section>
          <section>
            <TimeTracking heading='Time Tracking... Everywhere' />
          </section>
          <section>
            <div className='w-container'>
              <div className='imgCrop'>
                <img src={blackIpad} alt='Black ipad' className='blackIpad' />
              </div>
              <div className='easyToUse'>
                <p id='heading'>Easy to Use</p>
                <p id='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
                <FeatureOne />
              </div>
            </div>
          </section>
          <section>
            <div className='w-container'>
              <div className='takeItAnywhere'>
                <p id='heading'>You Can Take It Anywhere</p>
                <p id='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare.
                </p>
                <FeatureTwo />
              </div>
              <div className='imgCrop'>
                <img src={iPhoneFlat} alt='iPhone' className='iPhone' />
              </div>
            </div>
          </section>
          <section>
            <div className='w-container'>
              <div className='pricing'>
                <p id='heading'>Our Pricing Is Simple</p>
                <p id='description'>
                  No commitments. No credit cards required. Start your 14-day
                  trial today!
                </p>
                <Plans />
              </div>
            </div>
          </section>
          <section>
            <EmailSupport heading='24/7 Email Support' />
          </section>
        </div>
      </Layout>
    );
  }
}

export default index;
