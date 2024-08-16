// src/components/BurgerMenuButton/BurgerMenuButton.jsx
import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './BurgerMenuButton.module.css'; // Import CSS module

const BurgerMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <span className={styles.burgerIcon}></span>
        <span className={styles.burgerIcon}></span>
        <span className={styles.burgerIcon}></span>
      </button>
      {isOpen && <BurgerMenu onClose={toggleMenu} />}
    </div>
  );
};

export default BurgerMenuButton;
