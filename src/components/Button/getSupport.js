import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import '../../styles/getSupport.scss';

const getSupport = () => {
  return (
    <Fragment>
      <Link to='/contact' className='getSupport' role='button'>
        GET SUPPORT NOW
      </Link>
    </Fragment>
  );
};

export default getSupport;
