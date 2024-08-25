import React, { Suspense, lazy } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; // Import Header
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const LoginPage = lazy(() => import('./components/LoginPage/LoginPage'));
import RegisterPage from './components/RegisterPage/RegisterPage';
import AuthorizationPage from './components/AuthorizationPage/AuthorizationPage';
import TransactionHistoryPage from './components/TransactionHistoryPage/TransactionHistoryPage';
import MainTransactionPage from './components/MainTransactionPage/MainTransactionPage';

const App = () => (
  <Router basename="/expense-tracker">
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/transaction-history" element={<TransactionHistoryPage />} />
        <Route path="/main-transaction" element={<MainTransactionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </Router>
  );
export default App;
