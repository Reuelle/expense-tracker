// src/components/AuthNav/AuthNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AllUsersTab from '../AllUsersTab/AllUsersTab';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h4>EXPENSE LOG</h4>
        <h1>Manage Your&nbsp;<span>Finances</span> Masterfully!</h1>
        <p>
          ExpenseTracker effortlessly empowers you to take control of your
          finances! With intuitive features, it simplifies the process of
          tracking and managing expenses, allowing for a stress-free mastery
          over your financial world.
        </p>
        <nav className={styles.authNav}>
          <Link to="/register" className={`${styles.link} ${styles.signUp}`}>
            Sign Up
          </Link>
          <Link to="/login" className={`${styles.link} ${styles.signIn}`}>
            Sign In
          </Link>
        </nav>
      </header>
      <div className={styles.content}>
        <AllUsersTab />
      </div>
    </div>
  );
};

export default AuthNav;
