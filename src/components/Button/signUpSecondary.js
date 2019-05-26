import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/signUpSecondary.scss';

const signUpSecondary = () => {
  return (
    <Fragment>
      <Link to='/sign-up' className='signUpSecondary'>
        SIGN UP
      </Link>
    </Fragment>
  );
};

export default signUpSecondary;
