// src/components/Modal/Modal.jsx
import React, { useEffect, useCallback } from 'react';
import TransactionsHistoryNav from '../TransactionsHistoryNav/TransactionsHistoryNav';
import UserBarBtn from '../UserBarBtn/UserBarBtn';
import styles from './Modal.module.css'; // Import CSS module

const Modal = ({ isOpen, onClose }) => {
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <TransactionsHistoryNav />
        <UserBarBtn />
      </div>
    </div>
  );
};

export default Modal;
