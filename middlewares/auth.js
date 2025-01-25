const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const [, token] = authHeader.split(' '); // Divide o header e obtém o token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token
    req.userId = decoded.id; // Armazena o ID do usuário para uso posterior
    next(); // Passa para o próximo middleware ou rota
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
