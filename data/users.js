const bcrypt = require('bcrypt');

const users = [
  {
    id: 1,
    username: 'usuario1',
    password: bcrypt.hashSync('password1', 10), // La contraseña debe ser cifrada
    name: 'Juan Pérez'
  },
  {
    id: 2,
    username: 'usuario2',
    password: bcrypt.hashSync('password2', 10), // La contraseña debe ser cifrada
    name: 'María López'
  }
];

module.exports = {users};
