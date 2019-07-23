import React from 'react';
import SEO from '../components/seo';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/signup.scss';
import Layout from '../components/Layout/layout';

const signup = () => {
  const onSubmit = () => {
    setTimeout(() => {
      const fields = document.getElementById('fields');
      fields.style.display = 'none';

      const submitted = document.getElementById('submitted');
      submitted.style.display = 'block';
    }, 1000);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('This field is required'),
        lastName: Yup.string().required('This field is required'),
        email: Yup.string()
          .email('Invalid Email Address')
          .required('This field is required')
      })}
      onSubmit={onSubmit}
      render={({
        errors,
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Layout>
          <SEO title="Sign up" />
          <div className="signupWrapper">
            <section>
              <div>
                <p className="subHeading">START YOUR FREE 14 DAY TRAIL</p>
                <p className="desc">
                  No credit cards. No commitments. Cancel anytime.
                </p>
              </div>
              <div className="w-container">
                <div>
                  <div id="fields">
                    <div className="name">
                      <div>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          type="text"
                          name="firstName"
                          className={
                            errors.firstName && touched.firstName
                              ? 'firstName err'
                              : 'firstName'
                          }
                          placeholder="First Name"
                          aria-label="First Name"
                        />
                        <ErrorMessage name="firstName">
                          {msg => <div className="errMsg">{msg}</div>}
                        </ErrorMessage>
                      </div>
                      <div>
                        <Field
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          type="text"
                          name="lastName"
                          className={
                            errors.lastName && touched.lastName
                              ? 'lastName err'
                              : 'lastName'
                          }
                          placeholder="Last Name"
                          aria-label="Lasst Name"
                        />
                        <ErrorMessage name="lastName">
                          {msg => <div className="errMsg">{msg}</div>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div>
                      <Field
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        type="email"
                        name="email"
                        className={
                          errors.email && touched.email ? 'email err' : 'email'
                        }
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                      <ErrorMessage name="email">
                        {msg => <div className="errMsg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div className="signupBtn">
                      <Field
                        type="submit"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        className="signUpSecondary"
                        id="signUpSecondary"
                        value="SIGN UP"
                      />
                    </div>
                  </div>
                  <div className="success" id="submitted">
                    <p className="title">Thanks For Signing Up!</p>
                    <p className="msg">
                      We will send you an email very soon with next steps.
                    </p>
                  </div>
                </div>
                <div className="testimonials">
                  <p id="title">TESTIMONIALS</p>
                  <div>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <p className="user">- Larry Page, Google</p>
                  </div>
                  <div>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse.
                    </p>
                    <p className="user">- George, Pingdom</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Layout>
      )}
    />
  );
};

export default signup;
