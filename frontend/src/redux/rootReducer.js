import { combineReducers } from 'redux';
import authReducer from './Auth/Auth-slice';  // Adjust the path according to your project structure
import transactionsReducer from './Transactions/Transaction-operations'; // Adjust the path according to your project structure

const rootReducer = combineReducers({
  auth: authReducer,
  transactions: transactionsReducer,
  // Add other reducers here
});

export default rootReducer;