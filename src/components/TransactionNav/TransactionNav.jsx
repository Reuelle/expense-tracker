// src/components/TransactionNav/TransactionNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TransactionNav.module.css'; // Import CSS module for styles

const TransactionNav = () => (
  <nav className={styles.nav}>
    <NavLink
      to="/transaction-history/expense"
      className={styles.link}
      activeClassName={styles.active}
    >
      All Expense
    </NavLink>
    <NavLink
      to="/transaction-history/income"
      className={styles.link}
      activeClassName={styles.active}
    >
      All Income
    </NavLink>
  </nav>
);

export default TransactionNav;
