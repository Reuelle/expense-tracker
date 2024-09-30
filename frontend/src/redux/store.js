import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage for web
import transactionsReducer from './Transactions/transactions-slice';
import authReducer from './Auth/Auth-slice';

// Persist Configurations
const persistConfig = {
  key: 'root', // The key under which your persisted data will be stored in localStorage
  storage, // Storage method (localStorage by default)
  whitelist: ['auth'], // Add reducers you want to persist (optional, useful if only some parts need persistence)
};

// Create persisted reducers
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Store setup
const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: persistedAuthReducer, // Apply the persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore non-serializable actions from Redux Persist
      },
    }),
});

// Export the persistor
export const persistor = persistStore(store);
export default store;
