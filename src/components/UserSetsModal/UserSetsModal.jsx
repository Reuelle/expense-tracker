// src/components/UserSetsModal/UserSetsModal.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser, uploadAvatar, removeAvatar } from 'redux/User/User-operations'; // Adjust path as needed
import { showErrorNotification, showSuccessNotification } from 'utils/notifications'; // Adjust path as needed
import styles from './UserSetsModal.module.css'; // Import CSS module

const UserSetsModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    avatar: '',
    currency: '',
    name: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data from the backend or global state and set it to formData
    const fetchUserData = async () => {
      try {
        // Fetch user data
        // Set data to formData
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleRemoveAvatar = () => {
    dispatch(removeAvatar())
      .then(() => {
        setFormData({ ...formData, avatar: '' });
        showSuccessNotification('Avatar removed successfully');
      })
      .catch(err => showErrorNotification('Failed to remove avatar'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.avatar) {
      dispatch(uploadAvatar(formData.avatar))
        .catch(err => showErrorNotification('Failed to upload avatar'));
    }
    dispatch(updateUser(formData))
      .then(() => {
        showSuccessNotification('Profile updated successfully');
        onClose();
      })
      .catch(err => {
        setError('Failed to update profile');
        showErrorNotification('Failed to update profile');
      });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Profile Settings</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.avatarSection}>
            {formData.avatar ? (
              <img src={URL.createObjectURL(formData.avatar)} alt="User Avatar" className={styles.avatar} />
            ) : (
              <div className={styles.defaultAvatar}>No Avatar</div>
            )}
            <input type="file" onChange={handleFileChange} />
            <button type="button" onClick={handleRemoveAvatar}>Remove</button>
            <button type="submit">Upload new photo</button>
          </div>
          <label>
            Currency:
            <select name="currency" value={formData.currency} onChange={handleInputChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              {/* Add other currencies */}
            </select>
          </label>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default UserSetsModal;
