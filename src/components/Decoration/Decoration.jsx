// src/components/DecorationComponent/DecorationComponent.jsx
import React from 'react';
import styles from './Decoration.module.css';
import backgroundImg from './Rectangle1.png';

const DecorationComponent = () => (
  <div className={styles.container}>
    <div 
      className={styles.backgroundImage} 
      style={{ backgroundImage: `url(${backgroundImg})` }}
    ></div>
    <div className={styles.decorationTab}></div>
  </div>
);

export default DecorationComponent;
