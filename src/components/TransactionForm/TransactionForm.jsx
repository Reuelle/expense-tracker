// src/components/TransactionForm/TransactionForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../redux/Transactions/Transaction-operations';
import styles from './TransactionForm.module.css'; // Import CSS module for styling

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTransaction({ description, amount }));
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className={styles.input}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

