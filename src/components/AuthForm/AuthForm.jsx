import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './AuthForm.module.css'; // Import the CSS module

const AuthForm = ({
  formFields,
  submitButtonText,
  initialValues,
  validationSchema,
  onSubmit,
  navigation,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={styles.authFormContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className={styles.authForm}>
            {formFields.map((field) => (
              <div key={field.name} className={styles.formGroup}>
                <div className={styles.fieldWrapper}>
                  <Field
                    id={field.name}
                    name={field.name}
                    type={field.type === 'password' && passwordVisible ? 'text' : field.type}
                    placeholder={field.placeholder}
                    className={`${styles.formField} ${
                      field.isInvalid ? styles.invalid : ''
                    }`}
                  />
                  {field.type === 'password' && (
                    <button
                      type="button"
                      onClick={handlePasswordToggle}
                      className={styles.togglePassword}
                      aria-label="Toggle password visibility"
                    >
                      {passwordVisible ? 'Hide' : 'Show'}
                    </button>
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
