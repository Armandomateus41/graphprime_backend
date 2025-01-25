const bcrypt = require('bcryptjs');

const hash = "$2a$10$2P7gdc.XoSOIV51PEhkswOi/dGrnqwjyIfT9.jiTKB3wnFopKSVGS"; // Hash do banco
const password = "123456"; // Senha original

bcrypt.compare(password, hash, (err, isMatch) => {
  if (err) {
    console.error('Erro ao comparar hash:', err);
  } else if (isMatch) {
    console.log('Senha válida!');
  } else {
    console.log('Senha inválida.');
  }
});
