import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Navbar from './navbar';
import Footer from './footer';

import robotoSlabLight from '../../fonts/roboto-slab-v8-latin-300.woff2';
import robotoCondensedRegular from '../../fonts/roboto-condensed-v17-latin-regular.woff2';
import robotoCondensedBold from '../../fonts/roboto-condensed-v17-latin-700.woff2';
import robotoRegular from '../../fonts/roboto-v19-latin-regular.woff2';
import robotoMedium from '../../fonts/roboto-v19-latin-500.woff2';
import robotoLight from '../../fonts/roboto-v19-latin-300.woff2';

import '../../styles/layout.scss';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <Fragment>
          <Helmet>
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
              crossOrigin='anonymous'
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
          <main role='main'>{children}</main>
          <Footer />
        </Fragment>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
