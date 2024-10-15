import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from './Auth-slice';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4040/api/',
});

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

const handleError = (error) => {
  console.error('API Error:', error.response?.data || error.message);
  return error.response?.data || { message: 'An unexpected error occurred' };
};

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post('/auth/login', credentials);
      setAuthToken(data.token);
      dispatch(setUser(data.user));
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await api.post('/auth/logout');
      setAuthToken(null);
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

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
      const { data } = await api.get('/auth/current');
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post('/auth/register', userData);
      setAuthToken(data.token);
      dispatch(setUser(data.user));
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export { logIn, logOut, fetchCurrentUser, registerUser };
