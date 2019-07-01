import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/newsLetter.scss';
import twitterLogo from '../images/twitter-icon.svg';
import facebookLogo from '../images/facebook-icon.svg';

class newsLetter extends Component {
  onSubmit = () => {
    setTimeout(() => {
      var subscribe = document.getElementById('subscribe');
      subscribe.style.display = 'none';

      var emailNotif = document.getElementById('emailNotif');
      emailNotif.style.display = 'none';

      var success = document.getElementById('success');
      success.style.display = 'block';
    }, 1000);
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Invalid Email Address')
            .required('This field is required')
        })}
        onSubmit={this.onSubmit}
        render={({
          errors,
          values,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form>
            <div className='newsLetterWrapper'>
              <div className='subscribe' id='subscribe'>
                <div>
                  <Field
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type='email'
                    name='email'
                    id='email'
                    className={
                      errors.email && touched.email ? 'email err' : 'email'
                    }
                    placeholder='Your email'
                  />
                  <ErrorMessage name='email'>
                    {msg => <div className='errMsg'>{msg}</div>}
                  </ErrorMessage>
                </div>
                <Field
                  type='submit'
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  value='OK'
                  className='okBtn'
                  id='okBtn'
                />
              </div>
              <p id='emailNotif'>We send about 2 emails a month</p>
              <div className='success' id='success'>
                <p className='msg'>
                  Thank you! You'll be receiving some awesome emails!
                </p>
              </div>
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
          </Form>
        )}
      />
    );
  }
}

export default newsLetter;
