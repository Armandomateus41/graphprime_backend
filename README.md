# GraphPrime Backend

## Descrição do Projeto
GraphPrime é uma aplicação backend desenvolvida para gerenciar usuários com funcionalidades de autenticação, proteção de rotas e registro de logs. Ele é construído com Node.js, Express e Sequelize, utilizando um banco de dados MySQL. A aplicação também inclui uma documentação interativa da API com Swagger.

## Funcionalidades
- Criação, listagem, atualização e exclusão de usuários.
- Autenticação via JWT.
- Middleware de proteção de rotas.
- Logs de requisições.
- Paginação e filtros para listagem de usuários.
- Documentação da API com Swagger.

## Configuração e Execução Local

### Pré-requisitos
- Node.js (versão 18 ou superior).
- MySQL.
- Git.

### Passos para Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/Armandomateus41/graphprime_backend.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd graphprime_backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=graphprime
   DB_PORT=3306
   JWT_SECRET=sua_chave_secreta
   PORT=3001
   ```

5. Configure o banco de dados:
   - Crie o banco de dados no MySQL:
     ```sql
     CREATE DATABASE graphprime;
     ```
   - Execute as migrações:
     ```bash
     npx sequelize-cli db:migrate
     ```

6. Inicie o servidor:
   ```bash
   npm start
   ```

O servidor estará disponível em `http://localhost:3001` e a documentação da API em `http://localhost:3001/api-docs`.

## Exemplos de Uso da API

### 1. Criar Usuário
**Endpoint:** `POST /users`

**Payload:**
```json
{
  "name": "armando",
  "email": "armando@example.com",
  "password": "123456"
}
```

**Resposta:**
```json
{
  "id": 1,
  "name": "armando",
  "email": "armando@example.com",
  "createdAt": "2025-01-25T16:09:43.000Z",
  "updatedAt": "2025-01-25T16:09:43.000Z"
}
```

### 2. Login
**Endpoint:** `POST /auth/login`

**Payload:**
```json
{
  "email": "armando@example.com",
  "password": "123456"
}
```

**Resposta:**
```json
{
  "token": ""
}
```

### 3. Listar Usuários
**Endpoint:** `GET /users`

**Headers:**
```json
{
  "Authorization": ""
}
```

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "Armando",
    "email": "armando@example.com",
    "createdAt": "2025-01-25T16:09:43.000Z",
    "updatedAt": "2025-01-25T16:09:43.000Z"
  }
]
```

## Como Contribuir

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature ou correção de bug:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie as mudanças para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
