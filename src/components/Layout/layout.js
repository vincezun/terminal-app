import React, { Fragment } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Helmet from 'react-helmet';
import robotoSlabLight from '../../fonts/roboto-slab-v8-latin-300.woff2';
import robotoCondensedRegular from '../../fonts/roboto-condensed-v17-latin-regular.woff2';
import robotoCondensedBold from '../../fonts/roboto-condensed-v17-latin-700.woff2';
import robotoRegular from '../../fonts/roboto-v19-latin-regular.woff2';
import robotoMedium from '../../fonts/roboto-v19-latin-500.woff2';
import robotoLight from '../../fonts/roboto-v19-latin-300.woff2';

import '../../styles/layout.scss';

const layout = props => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content='Time Tracking Web App' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='front end' />
        <html lang='en' />
        <title>{props.title}</title>
        <link
          rel='preload'
          as='font'
          href={robotoSlabLight}
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          as='font'
          href={robotoCondensedRegular}
          type='font/woff2'
          crossOrigin
        />
        <link
          rel='preload'
          as='font'
          href={robotoCondensedBold}
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          as='font'
          href={robotoRegular}
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          as='font'
          href={robotoMedium}
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          as='font'
          href={robotoLight}
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Helmet>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default layout;
