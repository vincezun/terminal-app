import React from 'react';

import '../styles/404.scss';
import SEO from '../components/seo';
import GoBackToHomePage from '../components/Button/404-button';

const PageNotFound = () => (
  <div className='page-not-found-background'>
    <SEO title='Page not found' />
    <h1 className='title'>404</h1>
    <p className='sub-title'>PAGE NOT FOUND</p>
    <p className='description'>
      The page you are looking for was moved, renamed or might never existed.
    </p>
    <GoBackToHomePage />
  </div>
);

export default PageNotFound;
