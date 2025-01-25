const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GraphPrime API',
      version: '1.0.0',
      description: 'Documentação da API GraphPrime',
    },
    servers: [{ url: 'http://localhost:3001' }],
  },
  apis: ['./routes/*.js'], // Local das rotas documentadas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = { swaggerDocs };
