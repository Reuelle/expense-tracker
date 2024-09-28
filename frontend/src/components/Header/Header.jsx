// src/components/Header/Header.jsx
import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css'; // Import custom styles

const Header = () => (
  <header className={styles.header}>
    <Logo /> {/* Use the Logo component */}
    <div className={styles.logo}>
      
    </div>
    <nav className={styles.nav}>
      {/* Add navigation links or other elements as needed */}
    </nav>
  </header>
);

export default Header;
