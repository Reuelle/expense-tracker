// src/redux/Transactions/transactions-slice.js
import { createSlice } from '@reduxjs/toolkit';
import { 
  addTransaction, 
  fetchTransactions, 
  deleteTransaction, 
  updateTransaction 
} from './Transaction-operations';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],   // Holds the list of transactions
    status: 'idle',  // Can be 'idle', 'loading', 'succeeded', or 'failed'
    error: null   // To store any errors
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.items = state.items.filter(transaction => transaction.id !== action.payload);
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.items = state.items.map(transaction =>
          transaction.id === action.payload.id ? action.payload : transaction
        );
      });
  },
});

export default transactionsSlice.reducer;
