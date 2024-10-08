const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();

// Basic Proxy Middleware for API requests
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000', // Your frontend server address
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // This removes `/api` from the beginning of the path
  },
}));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API root!'); // Responds with a simple message for the root
});

// Database connection and server setup
const mongoose = require("mongoose");
const { DB_HOST, PORT = 4040 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });

// 404 error handler for undefined routes
app.use((req, res) => {
  res.status(404).send('404 - Route not found');
});
