import React from 'react';
import styles from './Decoration.module.css';
import backgroundImg from './Rectangle1.png'; // Assuming this is the background image
import balanceCardImg from './block.png'; // Your balance card image

const DecorationComponent = () => (
  <div className={styles.container}>
    <div 
      className={styles.backgroundImage} 
      style={{ backgroundImage: `url(${backgroundImg})` }}
    ></div>
    <div className={styles.balanceCard}>
      <img src={balanceCardImg} alt="Balance Card" className={styles.balanceCardImage} />
    </div>
    <div className={styles.decorationTab}></div>
  </div>
);

export default DecorationComponent;
