import React, { Component } from 'react';
import { Link } from 'gatsby';

import '../../styles/navbar.scss';
import SignUpPrimary from '../Button/signUpPrimary';
import hamburger from '../../images/hamburger.svg';

class navbar extends Component {
  componentDidMount() {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');

    if (menu) {
      menu.addEventListener('click', function() {
        overlay.classList.toggle('slideDown');

        if (overlay.classList.contains('slideDown')) {
          menu.classList.add('active');
        } else {
          menu.classList.remove('active');
        }
      });
    }
  }

  render() {
    return (
      <div className='navBarWrapper'>
        <div className='navBar'>
          <div className='w-container'>
            <div>
              <Link to='/' className='companyLogo'>
                terminal
              </Link>
            </div>

            <div className='menu' id='menu'>
              <img src={hamburger} alt='menu bar' className='hamburger' />
            </div>
          </div>
        </div>
        <nav className='navLinks'>
          <ul className='overlay' id='overlay'>
            <li>
              <Link to='/' activeClassName='active'>
                HOME
              </Link>
            </li>
            <li>
              <Link to='/pricing' activeClassName='active'>
                PRICING
              </Link>
            </li>
            <li>
              <Link to='/services' activeClassName='active'>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to='/about' activeClassName='active'>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to='/contact' activeClassName='active'>
                CONTACT
              </Link>
            </li>
            <li>
              <Link to='/sign-up' activeClassName='active'>
                SIGN UP
              </Link>
            </li>
            <SignUpPrimary />
          </ul>
        </nav>
      </div>
    );
  }
}

export default navbar;
