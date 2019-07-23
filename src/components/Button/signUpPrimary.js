import React from 'react';
import { Link } from 'gatsby';
import '../../styles/signUpPrimary.scss';

const signUpPrimary = () => {
  return (
    <>
      <Link to="/sign-up" className="signUpPrimary" role="button">
        SIGN UP
      </Link>
    </>
  );
};

export default signUpPrimary;
