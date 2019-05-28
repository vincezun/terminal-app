import React from 'react';
import { Link } from 'gatsby';

import '../../styles/footer.scss';
import Ok from '../Button/ok';
import twitterLogo from '../../images/twitter-icon.svg';
import facebookLogo from '../../images/facebook-icon.svg';

const footer = () => {
  return (
    <div className='darkGrayContainer'>
      <footer className='w-container'>
        <div className='company'>
          <h4>COMPANY</h4>
          <ul className='footerLinks'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Terminal</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/pricing'>Plans & Pricing</Link>
            </li>
            <li>
              <Link to='/'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className='getHelp'>
          <h4>GET HELP</h4>
          <ul className='footerLinks'>
            <li>
              <Link to='/'>Knowledge Base</Link>
            </li>
            <li>
              <Link to='/'>Frequently Asked Questions</Link>
            </li>
            <li>
              <Link to='/'>Forum</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='boringStuff'>
          <h4>BORING STUFF</h4>
          <ul className='footerLinks'>
            <li>
              <Link to='/'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/'>Terms of Service</Link>
            </li>
          </ul>

          <div className='newsLetter'>
            <input
              type='text'
              name='email'
              id='email'
              className='email'
              placeholder='Your email'
            />
            <Ok className='okBtn' />
          </div>

          <p>We send about 2 emails a month</p>
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
          <br />
          <Link to='/' className='companyLogo'>
            terminal
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default footer;
