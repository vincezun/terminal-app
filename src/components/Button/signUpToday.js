import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/signUpToday.scss';

const signUpToday = () => {
  return (
    <Fragment>
      <Link to='/sign-up' className='signUpToday'>
        SIGN UP TODAY &#160; ❯
      </Link>
    </Fragment>
  );
};

export default signUpToday;
