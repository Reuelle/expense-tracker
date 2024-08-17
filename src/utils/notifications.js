// src/utils/notifications.js
import { toast } from 'react-toastify'; // You can use any notification library

export const showErrorNotification = (message) => {
  toast.error(message);
};

export const showSuccessNotification = (message) => {
  toast.success(message);
};
