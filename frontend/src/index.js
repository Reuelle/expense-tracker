// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';  // Adjust the path as needed
import App from './App';

// Create the root element for React
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the application using the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
