import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from './components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from './components/MainTransactionPage/MainTransactionPage';

const App = () => (
  <Router basename="/expense-tracker">
    {/* ... */}
  </Router>
);
