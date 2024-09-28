// src/components/UserBarBtn/UserBarBtn.jsx
import React, { useState } from 'react';
import styles from './UserBarBtn.module.css'; // Import CSS module

const UserBarBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const user = {
    name: 'John Doe', // Replace with actual user data
    avatar: '', // Replace with actual user avatar URL or use a default
  };

  return (
    <div className={styles.userBarBtn}>
      <button className={styles.button} onClick={togglePanel}>
        <div className={styles.avatar}>
          {user.avatar ? (
            <img src={user.avatar} alt="User Avatar" className={styles.avatarImage} />
          ) : (
            <span className={styles.initial}>{user.name[0].toUpperCase()}</span>
          )}
        </div>
        <span className={styles.name}>{user.name}</span>
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {/* Add dropdown menu items here */}
          <button>Profile Settings</button>
          <button>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default UserBarBtn;
