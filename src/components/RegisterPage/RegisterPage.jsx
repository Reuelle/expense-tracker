// src/components/RegisterPage/RegisterPage.jsx
import React from 'react';
import * as Yup from 'yup'; // Import Yup for validation schema
import { useDispatch } from 'react-redux'; // Import useDispatch
import AuthForm from '../AuthForm/AuthForm'; 
import AllUsersTab from '../AllUsersTab/AllUsersTab'; 
import Decoration from '../Decoration/Decoration'; 
import TransactionForm from '../TransactionForm/TransactionForm'; 
import { registerUser } from '../../redux/Auth/Auth-operations';
import styles from './RegisterPage.module.css'; 

// Define form fields, initial values, and validation schema
const formFields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
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

const RegisterPage = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  
  const handleSubmit = (values) => {
    console.log('Form values:', values);
    dispatch(registerUser(values)); // Dispatch the action with form values
  };

  return (
    <div className={styles.registerPage}>
      <header className={styles.header}>
        <h1>Sign Up</h1>
        <p className={styles.description}>
          Step into a world of hassle-free expense management! Your journey at your fingertips.
        </p>
      </header>
      <Decoration />
      <AuthForm
        formFields={formFields}
        submitButtonText="Sign Up"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        navigation={{ href: '/login', text: 'Already have an account? Sign In' }}
      />
      <TransactionForm />
      <AllUsersTab />
    </div>
  );
};

export default RegisterPage;
