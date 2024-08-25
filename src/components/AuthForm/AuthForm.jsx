import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import styles from './AuthForm.module.css';
import showPasswordIcon from './icons-show.png';
import hidePasswordIcon from './icons8-hide.png';
import { registerUser, logIn } from '../../redux/Auth/Auth-operations'; // Import signIn

const AuthForm = ({
  formFields,
  submitButtonText,
  initialValues,
  validationSchema,
  navigation,
  formType, // Add formType prop here
}) => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleSubmit = (values) => {
    if (formType === 'register') {
      dispatch(registerUser(values));
    } else if (formType === 'login') {
      dispatch(signIn(values));
    }
  };

  return (
    <div className={styles.authFormContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.authForm}>
            {formFields.map(field => (
              <div key={field.name} className={styles.formGroup}>
                <div className={styles.fieldWrapper}>
                  <Field
                    id={field.name}
                    name={field.name}
                    type={field.type === 'password' && passwordVisible ? 'text' : field.type}
                    placeholder={field.placeholder}
                    className={`${styles.formField} ${field.isInvalid ? styles.invalid : ''}`}
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
