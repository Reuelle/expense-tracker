// src/components/AllUsersTab/AllUsersTab.jsx
import React from 'react';
import styles from './AllUsersTab.module.css'; // Optional: For custom styling

const AllUsersTab = () => {
  // You would typically fetch the user count from an API or state
  const userCount = 1234; // Example user count

  return (
    <div className={styles.allUsersTab}>
      <h2>Total Users</h2>
      <p>{userCount}</p>
    </div>
  );
};

export default AllUsersTab;
