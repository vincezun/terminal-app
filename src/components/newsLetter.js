import React from 'react';
import { Link } from 'gatsby';

import '../styles/newsLetter.scss';
import twitterLogo from '../images/twitter-icon.svg';
import facebookLogo from '../images/facebook-icon.svg';

const newsLetter = () => {
  return (
    <form action=''>
      <div className='newsLetter'>
        <input
          type='text'
          name='email'
          id='email'
          className='email'
          placeholder='Your email'
          required='required'
        />
        <input type='submit' value='OK' className='okBtn' />
        <p>We send about 2 emails a month</p>
        <div className='socialLinks'>
          <a href='https://www.twitter.com'>
            <img
              src={twitterLogo}
              alt='faceboook logo'
              className='twitter logo'
            />
          </a>
          <a href='https://www.facebook.com'>
            <img
              src={facebookLogo}
              alt='facebook logo'
              className='facebook logo'
            />
          </a>
        </div>

        <Link to='/' className='companyLogo'>
          terminal
        </Link>
      </div>
    </form>
  );
};

export default newsLetter;
