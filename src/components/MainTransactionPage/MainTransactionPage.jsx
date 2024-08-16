// src/components/MainTransactionPage/MainTransactionPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, fetchTransactions } from '../../redux/Transactions/Transaction-operations'; // Adjust path as needed
import './MainTransactionPage.module.css'; // Optional: For custom styling

const MainTransactionPage = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  // Select transaction-related state from Redux store
  const transactions = useSelector(state => state.transactions.items); // Adjust based on your state structure
  const isLoading = useSelector(state => state.transactions.isLoading);
  const error = useSelector(state => state.transactions.error);

  const handleAddTransaction = () => {
    dispatch(addTransaction({ description, amount }));
    setDescription('');
    setAmount('');
  };

  React.useEffect(() => {
    // Fetch transactions when the component mounts
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className="transaction-container">
      <h2>Add New Transaction</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="button" onClick={handleAddTransaction}>Add Transaction</button>
      </form>

      {/* Display transactions */}
      <h3>Existing Transactions</h3>
      {isLoading && <p>Loading transactions...</p>}
      {error && <p>Error: {error}</p>}
      {transactions.length === 0 && <p>No transactions available.</p>}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainTransactionPage;
