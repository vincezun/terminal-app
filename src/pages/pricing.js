import React from 'react';

import '../styles/pricing.scss';
import Layout from '../components/Layout/layout';
import StartTracking from '../components/startTracking';
import Plans from '../components/plans';

const pricing = () => {
  return (
    <Layout title='Pricing | Terminal'>
      <div className='pricingWrapper'>
        <section>
          <div className='w-container'>
            <div className='pricing'>
              <p className='subHeading'>OUR PRICING IS SIMPLE</p>
              <p className='description'>
                No commitments. No credit cards required. Start your 14-day
                trial today!
              </p>
              <Plans />
            </div>
          </div>
        </section>
        <section>
          <div className='w-container'>
            <div className='questions'>
              <p className='subHeading'>Frequently Asked Questions</p>
              <div className='articles'>
                <div>
                  <article>
                    <p className='question'>What is Terminal?</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </p>
                  </article>
                  <article>
                    <p className='question'>Are there any discounts?</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet.
                    </p>
                  </article>
                  <article>
                    <p className='question'>Does it work on iPhones?</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                  </article>
                  <article>
                    <p className='question'>How can I reach you?</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                  </article>
                </div>
                <div>
                  <article>
                    <p className='question'>Who is it for?</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor.
                    </p>
                  </article>
                  <article>
                    <p className='question'>What can I benefit from this? </p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                      Aenean faucibus nibh et justo cursus id rutrum lorem
                      imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                  </article>
                  <article>
                    <p className='question'>What is your goal?</p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                  </article>
                  <article>
                    <p className='question'>
                      Do you have international support?
                    </p>
                    <p className='description'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </p>
                  </article>
                </div>
              </div>
              <div className='reachUs'>
                <p className='heading'>HAVE MORE QUESTIONS?</p>
                <p className='description'>
                  Reach us at contact@terminal.com or 1-800-555-1234
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <StartTracking />
    </Layout>
  );
};

export default pricing;
