// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-family: 'Roboto', sans-serif;
    --font-size: 16px;
    --spacing: 1rem;
  }

  body {
    font-family: var(--font-family);
    font-size: var(--font-size);
    margin: var(--spacing);
    background-color: #f5f5f5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: var(--spacing);
  }
  
  // Add other global styles as needed
`;

export default GlobalStyles;

