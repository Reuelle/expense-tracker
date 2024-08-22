// src/components/LoginPage/LoginPage.jsx
import React from 'react';
import AuthForm from '../AuthForm/AuthForm'; // Adjust the import path as needed
import styles from './LoginPage.module.css'; // Import CSS module for styling

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = null; // Replace with your validation logic if needed

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    // Add your login logic here
  };

  return (
    <div className={styles.loginPage}>
      <header className={styles.pageHeader}>
        <h1>Login to Your Account</h1>
      </header>
      <div className={styles.pageDescription}>
        <p>Welcome back to effortless expense tracking!Your financial dashboard awaits.</p>
      </div>
      <AuthForm
        formFields={[
          { name: 'email', type: 'email', placeholder: 'Email' },
          { name: 'password', type: 'password', placeholder: 'Password' },
        ]}
        submitButtonText="Sign In"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        navigation={{ href: '/register', text: "Don't have an account? Register here" }}
      />
    </div>
  );
};

export default LoginPage;

