const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
const path = require('path');


const mainRouter = require('./routes/main');
const apiRouter = require('./routes/api');

const app = express();

// Middlewares 
app.use(express.static(path.join(__dirname, '../public')));

// Template Engine 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.use('/', mainRouter);

// API route
app.use('/api', apiRouter);

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Port cfg
const port = 3000;

// Start 
app.listen(port, () => {
  console.log(`Hey! 🚀 Server is running at http://localhost:${port}`);
});
