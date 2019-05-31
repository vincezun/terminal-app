import React from 'react';
import { Link } from 'gatsby';

import '../../styles/footer.scss';
import NewsLetter from '../newsLetter';

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
        </div>
        <NewsLetter />
      </footer>
    </div>
  );
};

export default footer;
