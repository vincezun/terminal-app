import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/getStartedPrimary.scss';

const getStartedPrimary = () => {
  return (
    <Fragment>
      <Link to='/sign-up' className='getStartedPrimary'>
        GET STARTED NOW
      </Link>
    </Fragment>
  );
};

export default getStartedPrimary;
