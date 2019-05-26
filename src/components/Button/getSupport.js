import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/getSupport.scss';

const getSupport = () => {
  return (
    <Fragment>
      <Link to='/contact' className='getSupport'>
        GET SUPPORT NOW
      </Link>
    </Fragment>
  );
};

export default getSupport;
