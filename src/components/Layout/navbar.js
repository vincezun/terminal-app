import React, { Fragment, Component } from 'react';
import { Link } from 'gatsby';
import SignUpPrimary from '../Button/signUpPrimary';
import '../../styles/navbar.scss';

import hamburger from '../../images/hamburger.svg';

class navbar extends Component {
  componentDidMount() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

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
      <Fragment>
        <nav className='navbar' id='navbar'>
          <Link to='/' className='companyLogo'>
            terminal
          </Link>

          <div className='menu' id='menu'>
            <img src={hamburger} alt='menu bar' className='hamburger' />
          </div>

          <ul className='overlay' id='overlay'>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/pricing'>PRICING</Link>
            </li>
            <li>
              <Link to='/services'>SERVICES</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
            <li>
              <Link to='/sign-up'>SIGN UP</Link>
            </li>
          </ul>

          <SignUpPrimary className='signUpPrimary' />
        </nav>
      </Fragment>
    );
  }
}

export default navbar;
