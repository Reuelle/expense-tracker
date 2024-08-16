// src/components/AuthForm/AuthForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import * as Yup from 'yup';
import styles from './AuthForm.module.css'; // Optional: For custom styling

const AuthForm = ({
  formFields,
  submitButtonText,
  initialValues,
  validationSchema,
  onSubmit,
  navigation
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
                <label htmlFor={field.name}>{field.label}</label>
                <Field
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className={`${styles.formField} ${
                    // Apply invalid styling if there's an error
                    field.error ? styles.invalid : ''
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
          </Form>
        )}
      </Formik>
      <div className={styles.navigation}>
        <a href={navigation.href} className={styles.navLink}>
          {navigation.text}
        </a>
      </div>
    </div>
  );
};

export default AuthForm;
