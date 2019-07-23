import React from 'react';
import { Link } from 'gatsby';
import '../../styles/getStartedSecondary.scss';

const getStartedSecondary = () => {
  return (
    <>
      <Link to="/sign-up" className="getStartedSecondary" role="button">
        GET STARTED NOW &#160; ❯
      </Link>
    </>
  );
};

export default getStartedSecondary;
