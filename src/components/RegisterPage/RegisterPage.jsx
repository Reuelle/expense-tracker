// src/components/RegisterPage/RegisterPage.jsx
import React from 'react';
import * as Yup from 'yup';
import AuthForm from '../AuthForm/AuthForm'; // Import AuthForm component
import AllUsersTab from '../AllUsersTab/AllUsersTab'; // Import AllUsersTab component
import Decoration from '../Decoration/Decoration';
import styles from './RegisterPage.module.css'; // Import CSS module for styling

// Define form fields, initial values, and validation schema
const formFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
];

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const handleSubmit = (values) => {
  console.log('Form values:', values);
  // Handle form submission here
};

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <header className={styles.header}>
        <h1>Sign Up</h1>
        <p className={styles.description}>
          Step into a world of hassle-free expense management! Your journey at your fingertips.
        </p>
      </header>
      <Decoration /> {/* Include Decoration component here */}
      <AuthForm
        formFields={formFields}
        submitButtonText="Register"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        navigation={{ href: '/login', text: 'Already have an account? Sign In' }}
      />
      <AllUsersTab /> {/* Render AllUsersTab component */}
    </div>
  );
};

export default RegisterPage;
