const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // Import the Swagger specification
const expensesRouter = require('./routes/expenses');

const app = express();

// Serve Swagger UI at /api-docs endpoint
app.use('https://expense-tracker.b.goit.study/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Other middleware and routes
app.use(express.json());
app.use('/api/expenses', require('./routes/expenses')); // Example route

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
