import React from 'react';
import { Link } from 'gatsby';
import '../../styles/getStarted.scss';

const getStarted = () => {
  return (
    <>
      <Link to="/sign-up" className="getStarted" role="button">
        GET STARTED NOW &#160; ❯
      </Link>
    </>
  );
};

export default getStarted;
