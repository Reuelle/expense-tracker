const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // Import the Swagger specification

const app = express();

// Serve Swagger UI at /api-docs endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Other middleware and routes
app.use(express.json());
app.use('/api/expenses', require('./routes/expenses')); // Example route

// Start the server
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
