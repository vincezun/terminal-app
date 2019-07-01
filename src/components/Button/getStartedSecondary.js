import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/getStartedSecondary.scss';

const getStartedSecondary = () => {
  return (
    <Fragment>
      <Link to='/sign-up' className='getStartedSecondary' role='button'>
        GET STARTED NOW &#160; ❯
      </Link>
    </Fragment>
  );
};

export default getStartedSecondary;
