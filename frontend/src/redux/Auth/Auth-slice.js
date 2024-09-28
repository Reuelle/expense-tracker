import { createSlice } from '@reduxjs/toolkit';
import { logIn as logInOperation, logOut as logOutOperation, fetchCurrentUser as fetchCurrentUserOperation } from './Auth-operations'; // Rename operations for clarity

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    // other initial state properties
  },
  reducers: {
    // Renamed to avoid conflicts with thunks
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    // Add any other reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInOperation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(logInOperation.rejected, (state, action) => {
        // Handle the rejected case
      })
      .addCase(logOutOperation.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logOutOperation.rejected, (state, action) => {
        // Handle the rejected case
      })
      .addCase(fetchCurrentUserOperation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(fetchCurrentUserOperation.rejected, (state, action) => {
        // Handle the rejected case
      });
  },
});

export const { setUser, clearUser } = authSlice.actions; // Export renamed actions
export default authSlice.reducer;
