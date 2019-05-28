import React, { Component } from 'react';
import Layout from '../components/Layout/layout';
import '../styles/index.scss';
// import SignUpPrimary from '../components/Button/signUpPrimary';
// import SignUpSecondary from '../components/Button/signUpSecondary';
// import SignUpToday from '../components/Button/signUpToday';
import GetStartedPrimary from '../components/Button/getStartedPrimary';
// import GetStartedSecondary from '../components/Button/getStartedSecondary';
import GetStarted from '../components/Button/getStarted';
// import GetSupport from '../components/Button/getSupport';
import LearnMore from '../components/Button/LearnMore';
// import SendEmail from '../components/Button/sendEmail';
// import Ok from '../components/Button/ok';
import blackIpad from '../images/black-ipad.png';
import forbes from '../images/forbes-logo.svg';
import fastcompany from '../images/fastcompany-logo.svg';
import wired from '../images/wired-logo.svg';
import zdnet from '../images/zdnet-logo.svg';
import techcrunch from '../images/techcrunch-logo.svg';
import allDevices from '../images/all-devices.png';
import iPhoneFlat from '../images/iPhone-flat.png';

import FeaturerOne from '../components/Feature/featureOne';
import FeatureTwo from '../components/Feature/featureTwo';
import Pricing from '../components/pricing';

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

              <img src={blackIpad} alt='Black Ipad' className='blackIpad' />
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
            <div className='w-container'>
              <p id='heading'>Time Tracking... Everywhere</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <GetStarted />
              <img src={allDevices} alt='All devices' className='allDevices' />
            </div>
          </section>
          <section>
            <div className='w-container'>
              <img src={blackIpad} alt='Black ipad' className='blackIpad' />
              <div className='easyToUse'>
                <p id='heading'>Easy to Use</p>
                <p id='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
              </div>
              <FeaturerOne />
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
              </div>
              <FeatureTwo />
              <img src={iPhoneFlat} alt='iPhone' className='iPhone' />
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
              </div>
              <Pricing />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default index;
