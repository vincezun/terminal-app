import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/signUpToday.scss';

const signUpToday = () => {
  return (
    <Fragment>
      <Link to='/sign-up' className='signUpToday' role='button'>
        SIGN UP TODAY &#160; ❯
      </Link>
    </Fragment>
  );
};

export default signUpToday;
