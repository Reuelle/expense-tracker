// src/components/AuthorizationPage/AuthorizationPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/Auth/Auth-operations'; // Adjust path as needed
import './AuthorizationPage.module.css'; // Optional: For custom styling

const AuthorizationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  // Select authentication state from Redux store
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const error = useSelector(state => state.auth.error);
  const isLoading = useSelector(state => state.auth.isLoading);

  const handleLogin = () => {
    dispatch(logIn({ email, password }));
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleLogin}>Log In</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isAuthenticated && <p>You are logged in!</p>}
    </div>
  );
};

export default AuthorizationPage;
