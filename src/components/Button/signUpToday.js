import React from 'react';
import { Link } from 'gatsby';
import '../../styles/signUpToday.scss';

const signUpToday = () => {
  return (
    <>
      <Link to="/sign-up" className="signUpToday" role="button">
        SIGN UP TODAY &#160; ❯
      </Link>
    </>
  );
};

export default signUpToday;
