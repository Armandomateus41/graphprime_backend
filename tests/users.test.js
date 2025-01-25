const request = require('supertest');
const app = require('../app');

describe('Teste da API de Usuários', () => {
  it('Deve listar usuários com sucesso', async () => {
    const res = await request(app).get('/users').set('Authorization', `Bearer {seu_token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });
});
