import React from 'react';
import GlobalStyles from './styles/GlobalStyles'; // Make sure to use GlobalStyles or remove it if not used
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from './components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from './components/MainTransactionPage/MainTransactionPage';
// Import NotFoundPage if you decide to use it

const App = () => (
  <Router basename="/expense-tracker">
    <GlobalStyles /> {/* Use GlobalStyles here if applicable */}
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/transaction-history" element={<TransactionHistoryPage />} />
      <Route path="/main-transaction" element={<MainTransactionPage />} />
      {/* Add a NotFoundPage route if you implement it */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  </Router>
);

export default App;
