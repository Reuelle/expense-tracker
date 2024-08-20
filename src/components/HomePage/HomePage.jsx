// src/components/HomePage/HomePage.jsx
import React from 'react';
import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from '../AllUsersTab/AllUsersTab';
import Decoration from './components/Decoration/Decoration';

import styles from './HomePage.module.css'; // Import CSS module for styling

const HomePage = () => {
   console.log('HomePage component is rendering');
  return (
    <div className={styles.homePage}>
      <div className={styles.mainContent}>
        <DecorationComponent /> {/* Render the decoration component */}
        <h1>Manage Your Finances Masterfully!</h1>
        <p>
          ExpenseTracker effortlessly empowers you to take control of your finances! 
          With intuitive features, it simplifies the process of tracking and managing expenses, 
          allowing for a stress-free mastery over your financial world.
        </p>
        <AuthNav /> {/* Navigation for Register/Login */}
        <div className={styles.content}>
          <AllUsersTab /> {/* This will only be visible on desktop */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
