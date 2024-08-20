import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Import Header
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from './components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from './components/MainTransactionPage/MainTransactionPage';

const App = () => <div>Test App Component</div>;(
  <BrowserRouter>
    <Header /> {/* Add Header here if it should be on all pages */}
    <Routes>
      {/* Render HomePage correctly */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/authorization" element={<AuthorizationPage />} />
      <Route path="/transaction-history" element={<TransactionHistoryPage />} />
      <Route path="/main-transaction" element={<MainTransactionPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
