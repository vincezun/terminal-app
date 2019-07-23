import React from 'react';
import { Link } from 'gatsby';
import '../../styles/learnMore.scss';

const learnMore = () => {
  return (
    <>
      <Link to="/about" className="learnMore" role="button">
        LEARN MORE
      </Link>
    </>
  );
};

export default learnMore;
