const swaggerJSDoc = require('swagger-jsdoc');

// Definición de las opciones de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Example',
      version: '1.0.0',
      description: 'Descripción de mi API',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Reemplaza con la URL base de tu API
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      },
    },
    security: [
      {
        BearerAuth: [], // Aplicar Bearer Token a las rutas que lo requieran
      }
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta de tus archivos de rutas
};

// Generar el objeto de especificación de Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;








