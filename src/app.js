const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');


const indexRouter = require('./routes/index');

const app = express();

// Ruta para acceder a la documentación generada por Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta raíz '/'
app.use('/', indexRouter);

// Configuración del puerto
const port = 3000;

// Inicia el servidor
app.listen(port, () => {
  console.log(`Hey! 🚀 Server is running at http://localhost:${port}`);
});
