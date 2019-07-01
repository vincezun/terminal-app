import React, { Fragment, Component } from 'react';
import { Link } from 'gatsby';
import '../../styles/signUpPrimary.scss';

class signUpPrimary extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/sign-up' className='signUpPrimary' role='button'>
          SIGN UP
        </Link>
      </Fragment>
    );
  }
}

export default signUpPrimary;
