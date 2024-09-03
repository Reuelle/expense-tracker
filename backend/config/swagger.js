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
        url: ' npm install -g nodemon

        added 29 packages in 45s
        
        4 packages are looking for funding
          run `npm fund` for details
        
        Jhinks@LAPTOP-O2VUN4IU MINGW64 /c/expense-tracker/expense-tracker (main)
        $ nodemon start
        [nodemon] 3.1.4
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,cjs,json
        [nodemon] starting `react-scripts start start`
        ', // Update with your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
