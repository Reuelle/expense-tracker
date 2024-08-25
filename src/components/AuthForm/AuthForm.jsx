// src/components/AuthForm/AuthForm.jsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import styles from './AuthForm.module.css';
import showPasswordIcon from './icons-show.png';
import hidePasswordIcon from './icons8-hide.png';
import { registerUser } from '../../redux/Auth/Auth-operations';

const AuthForm = ({
  formFields,
  submitButtonText,
  initialValues,
  validationSchema,
  navigation,
  formType,
}) => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleSubmit = async (values, { setErrors }) => {
    try {
      if (formType === 'register') {
        await dispatch(registerUser(values));
        // Handle successful registration
      } else if (formType === 'login') {
        await dispatch(logIn(values));
        // Handle successful login
      }
    } catch (error) {
      // Set form errors if registration fails
      setErrors({ [error.field]: error.message });
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className={styles.authFormContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className={styles.authForm}>
            {formFields.map(field => (
              <div key={field.name} className={styles.formGroup}>
                <div className={styles.fieldWrapper}>
                  <Field
                    id={field.name}
                    name={field.name}
                    type={field.type === 'password' && passwordVisible ? 'text' : field.type}
                    placeholder={field.placeholder}
                    autoComplete={field.type === 'password' ? 'current-password' : 'off'}
                    className={`${styles.formField} ${errors[field.name] ? styles.invalid : ''}`}
                  />
                  {field.type === 'password' && (
                    <img
                      src={passwordVisible ? hidePasswordIcon : showPasswordIcon}
                      alt={passwordVisible ? 'Hide password' : 'Show password'}
                      className={styles.togglePasswordIcon}
                      onClick={handlePasswordToggle}
                    />
                  )}
                </div>
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className={styles.errorMessage}
                />
              </div>
            ))}
            <button type="submit" className={styles.submitButton}>
              {submitButtonText}
            </button>
            <div className={styles.navigation}>
              <a href={navigation.href} className={styles.navLink}>
                {navigation.text}
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
