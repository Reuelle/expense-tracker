// src/components/DecorationComponent/DecorationComponent.jsx
import React from 'react';
import styles from './DecorationComponent.module.css';
import backgroundImg from '../../assets/Rectangle1.png'; // Import the image

const DecorationComponent = () => (
  <div className={styles.container}>
    <div 
      className={styles.backgroundImage} 
      style={{ backgroundImage: `url(${backgroundImg})` }} // Use the imported image
    ></div>
    <div className={styles.decorationTab}>Decoration Tab</div>
  </div>
);

export default DecorationComponent;
