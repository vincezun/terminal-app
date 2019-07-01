import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/getStarted.scss';

const getStarted = () => {
  return (
    <Fragment>
      <Link to='/sign-up' className='getStarted' role='button'>
        GET STARTED NOW &#160; ❯
      </Link>
    </Fragment>
  );
};

export default getStarted;
