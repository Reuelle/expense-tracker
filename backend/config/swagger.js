const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Expense Tracker API',
      version: '1.0.0',
      description: 'API documentation for the Expense Tracker project',
    },
    servers: [
      {
        url: 'http://localhost:4040/', // Update with your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
