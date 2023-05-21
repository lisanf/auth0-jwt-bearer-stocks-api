const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
const jwtCheck = require('./auth/jwtConfig')
const path = require('path');


const mainRouter = require('./routes/main');
const apiPublicRouter = require('./routes/apiPublic');
const apiPrivateRouter = require('./routes/apiPrivate');

const app = express();

// Middlewares 
app.use(express.static(path.join(__dirname, '../public')));

// Template Engine 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Home route
app.use('/', mainRouter);

// API Public route
app.use('/api/public', apiPublicRouter);

// API Private route
app.use('/api/private', jwtCheck, apiPrivateRouter);

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Port cfg
const port = 3000;

// Start 
app.listen(port, () => {
  console.log(`Hey! 🚀 Server is running at http://localhost:${port}`);
});
