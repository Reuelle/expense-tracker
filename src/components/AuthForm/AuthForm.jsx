// src/components/AuthForm/AuthForm.jsx
import React from 'react';
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
                <Field
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`${styles.formField} ${
                    field.isInvalid ? styles.invalid : ''
                  }`}
                />
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
