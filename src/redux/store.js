import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage
import transactionsReducer from './Transactions/transactions-slice';
import authReducer from './Auth/Auth-slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
export default store;
