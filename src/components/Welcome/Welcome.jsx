// src/components/WelcomePage/WelcomePage.jsx
import React from 'react';
import DecorationComponent from '../DecorationComponent/DecorationComponent';
import styles from './WelcomePage.module.css';

const WelcomePage = () => (
  <div className={styles.container}>
    <DecorationComponent /> {/* This will show on the WelcomePage */}
    <h1>Welcome to the Expense Tracker</h1>
    {/* Other Welcome Page content */}
  </div>
);

export default WelcomePage;
