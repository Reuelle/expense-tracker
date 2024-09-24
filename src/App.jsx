import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from './components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from './components/MainTransactionPage/MainTransactionPage';
import ExpenseChart from './components/TransactionsChart/ExpenseChart'; // Import your ExpenseChart

const App = () => {
  const [transactions, setTransactions] = useState([]); // State to hold transactions

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]); // Function to add a transaction
  };

  return (
    <Router basename="/expense-tracker">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/transaction-history" element={<TransactionHistoryPage />} />
        <Route path="/main-transaction" element={<MainTransactionPage addTransaction={addTransaction} />} />
        {/* Route to include ExpenseChart */}
        <Route path="/dashboard" element={<ExpenseChart transactions={transactions} />} />
        {/* Add a NotFoundPage route if you implement it */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
