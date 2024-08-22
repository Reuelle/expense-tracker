// src/components/CategoriesModal/CategoriesModal.jsx
import React from 'react';
import styles from './CategoriesModal.module.css';

const CategoriesModal = ({ onSelect, onClose }) => {
  const categories = ['Food', 'Transport', 'Entertainment']; // Example categories

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Select Category</h2>
        <div>
          {categories.map(category => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                onChange={() => onSelect(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CategoriesModal;
