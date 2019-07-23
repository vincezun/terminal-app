import React from 'react';
import { Link } from 'gatsby';
import '../../styles/getStartedPrimary.scss';

const getStartedPrimary = () => {
  return (
    <>
      <Link to="/sign-up" className="getStartedPrimary" role="button">
        GET STARTED NOW
      </Link>
    </>
  );
};

export default getStartedPrimary;
