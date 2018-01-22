var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  id: String,
  nome: String,
  email: String,
  login: String,
  senha: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);