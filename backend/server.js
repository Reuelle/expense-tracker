const mongoose = require("mongoose");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();

// Destructure environment variables
const { DB_HOST, PORT = 4040 } = process.env;

// Connect to MongoDB
mongoose
  .connect(DB_HOST)
  .then(() => {
    // Start the server upon successful connection
    app.listen(PORT, () => {
      console.log("==============================");
      console.log("Server running on PORT:", PORT);
      console.log("Database connection successful");
      console.log("==============================");
    });
  })
  .catch((err) => {
    // Log any errors during connection
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit the process with failure
  });

// Set up proxy middleware for API requests
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:3000', // Replace with your frontend URL
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove `/api` from the path
  },
});

// Apply the proxy middleware
app.use(apiProxy);
