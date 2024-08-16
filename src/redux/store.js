// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './Transactions/transactions-slice';
import authReducer from './Auth/Auth-slice';  // Assuming you have this

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: authReducer,  // Include other reducers as needed
  },
});

export default store;
