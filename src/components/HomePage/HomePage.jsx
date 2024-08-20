// src/components/HomePage/HomePage.jsx
import React, { useEffect }  from 'react';
import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from '../AllUsersTab/AllUsersTab';
import Decoration from '../Decoration/Decoration';

import styles from './HomePage.module.css'; // Import CSS module for styling

const HomePage = () => {
   console.log('HomePage component is rendering');
  useEffect(() => {
    console.log('HomePage component mounted');
  }, []);
  return (
    <div className={styles.homePage}>
      <Decoration /> {/* Render the decoration component */}
      <div className={styles.mainContent}>
        <h1>
        </h1>
        <p>
          
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
