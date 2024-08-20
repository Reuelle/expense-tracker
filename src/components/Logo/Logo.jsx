import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Assumed custom hook for authentication status
import logoImage from './Logo.png'; // Path to the logo image
import styles from './Logo.module.css'; // CSS Module for styling

const Logo = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Use authentication hook to check if user is authenticated

  const handleClick = () => {
    navigate('/'); // Navigate to HomePage
  };

  return (
    <div className={styles.logoContainer} onClick={handleClick}>
      <img src={logoImage} alt="Expense Tracker Logo" className={styles.logo} />
      <span className="logo-text"></span>
    </div>
  );
};

export default Logo;
