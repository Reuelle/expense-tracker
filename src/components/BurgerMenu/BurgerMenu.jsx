// src/components/BurgerMenu/BurgerMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.css'; // Import CSS module

const BurgerMenu = ({ onClose }) => {
  return (
    <div className={styles.menuOverlay}>
      <div className={styles.menuContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <nav>
          <ul>
            <li><Link to="/" onClick={onClose}>Home</Link></li>
            <li><Link to="/authorization" onClick={onClose}>Authorization</Link></li>
            <li><Link to="/transaction-history" onClick={onClose}>Transaction History</Link></li>
            <li><Link to="/main-transaction" onClick={onClose}>Main Transaction</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
