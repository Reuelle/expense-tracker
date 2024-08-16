import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from './Auth-slice'; // Adjusted import

// Set up your API base URL
axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/api-docs/';

// Utility to set authorization token
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

// Log In operation
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthToken(data.token);
      dispatch(setUser(data.user)); // Using setUser from Auth-slice
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Log Out operation
export const logOut = createAsyncThunk('auth/logOut', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/auth/logout');
    setAuthToken(null);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Get Current User operation
export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue('No token found');
    }

    try {
      setAuthToken(persistedToken);
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
