// src/components/TransactionHistoryPage/TransactionHistoryPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTransactions } from '../../redux/Transactions/Transaction-operations'; // Adjust path as needed
import TransactionNav from '../TransactionNav/TransactionNav'; // Import navigation component
import './TransactionHistoryPage.module.css'; // Optional: For custom styling

const TransactionHistoryPage = () => {
  const dispatch = useDispatch();
  const { type } = useParams(); // Get transaction type from URL params
  const transactions = useSelector((state) => state.transactions.items); // Adjust state path as needed

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // Filter transactions based on type
  const filteredTransactions = transactions.filter((transaction) =>
    type === 'expense' ? transaction.amount < 0 : transaction.amount > 0
  );

  return (
    <div className="history-container">
      <TransactionNav /> {/* Include the navigation component */}
      <h2>{type === 'expense' ? 'Expense Transactions' : 'Income Transactions'}</h2>
      <ul>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.date} - {transaction.description} - ${transaction.amount}
            </li>
          ))
        ) : (
          <li>No transactions found</li>
        )}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;
