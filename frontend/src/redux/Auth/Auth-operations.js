import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from './Auth-slice';

// Set the base URL to the root of your API
axios.defaults.baseURL = 'http://localhost:4040/api';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

// Login action
const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthToken(data.token);
      dispatch(setUser(data.user));
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Logout action
const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      setAuthToken(null);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch current user action
const fetchCurrentUser = createAsyncThunk(
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

// Register user action
const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/auth/register', userData);
      setAuthToken(data.token);
      dispatch(setUser(data.user));
      return data;
    } catch (error) {
      console.error('Registration error:', error.response.data);
       return rejectWithValue(error.response.data.message || 'Registration failed');
    }
  }
);

// Export actions
export { logIn, logOut, fetchCurrentUser, registerUser };
