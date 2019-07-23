import React from 'react';
import { Link } from 'gatsby';
import '../../styles/getSupport.scss';

const getSupport = () => {
  return (
    <>
      <Link to="/contact" className="getSupport" role="button">
        GET SUPPORT NOW
      </Link>
    </>
  );
};

export default getSupport;
