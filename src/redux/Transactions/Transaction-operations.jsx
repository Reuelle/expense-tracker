// src/redux/Transactions/Transaction-operations.jsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define API endpoint
axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/api/'; // Base URL for your API

// Create an async thunk for adding a new transaction
export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async ({ description, amount }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/transactions', { 
        description,
        amount,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

// Create an async thunk for fetching transactions
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/transactions'); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

// Create an async thunk for deleting a transaction
export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/transactions/${id}`); 
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);

// Create an async thunk for updating a transaction
export const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/transactions/${id}`, updates); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred');
    }
  }
);
