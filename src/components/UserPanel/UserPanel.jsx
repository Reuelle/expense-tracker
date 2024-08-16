// src/components/UserPanel/UserPanel.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // For redirection
import { logOut } from 'redux/Auth/Auth-operations'; // Adjust path as needed
import { useAuth } from '../hooks/useAuth'; // Custom hook to get user data
import defaultAvatar from './icons8-avatar.gif'; // Adjust path as needed
import styles from './UserPanel.module.css'; // Import CSS module
import { ReactComponent as ArrowDownIcon } from './icons/arrow-down.svg'; // Adjust path as needed
import { ReactComponent as ArrowUpIcon } from './icons/arrow-up.svg'; // Adjust path as needed
import UserSetsModal from '../UserSetsModal/UserSetsModal'; // Import your modal component

const UserPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth(); // Custom hook to get user data

  const togglePanel = () => setIsOpen(!isOpen);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/welcome'); // Redirect to WelcomePage
  };

  const userInitial = user?.name?.charAt(0).toUpperCase();
  const avatar = user?.avatar || defaultAvatar;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={togglePanel}>
        <div className={styles.avatar}>
          {user?.avatar ? (
            <img src={avatar} alt="User Avatar" />
          ) : (
            <span>{userInitial}</span>
          )}
        </div>
        <div className={styles.userName}>{user?.name}</div>
        <div className={styles.icon}>
          {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={styles.dropdownItem}
            onClick={() => setIsModalOpen(true)}
          >
            Profile settings
          </button>
          <button className={styles.dropdownItem} onClick={handleLogOut}>
            Log out
          </button>
        </div>
      )}
      {isModalOpen && <UserSetsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default UserPanel;
