import React, { Fragment } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Helmet from 'react-helmet';
import '../../styles/layout.scss';

const layout = props => {
  return (
    <Fragment>
      <Helmet>
        <title>{props.title}</title>
        <link
          rel='preload'
          as='font'
          href='../../fonts/roboto-slab-v8-latin-300.woff2'
          type='font/woff2'
        />
        <link
          rel='preload'
          as='font'
          href='../../fonts/roboto-condensed-v17-latin-regular.woff2'
          type='font/woff2'
        />
        <link
          rel='preload'
          as='font'
          href='../../fonts/roboto-condensed-v17-latin-700.woff2'
          type='font/woff2'
        />
        <link
          rel='preload'
          as='font'
          href='../../fonts/roboto-v19-latin-regular.woff2'
          type='font/woff2'
        />
        <link
          rel='preload'
          as='font'
          href='../../fonts/roboto-v19-latin-500.woff2'
          type='font/woff2'
        />
        <link
          rel='preload'
          as='font'
          href='../fonts/roboto-v19-latin-300.woff2'
          type='font/woff2'
        />
      </Helmet>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default layout;
