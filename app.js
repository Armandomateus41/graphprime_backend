const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const { swaggerDocs } = require('./swagger');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
});
