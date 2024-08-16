// src/components/DecorationComponent/DecorationComponent.jsx
import React from 'react';
import styles from './DecorationComponent.module.css';

const DecorationComponent = () => (
  <div className={styles.container}>
    <div className={styles.backgroundImage}></div>
    <div className={styles.decorationTab}>Decoration Tab</div>
  </div>
);

export default DecorationComponent;

