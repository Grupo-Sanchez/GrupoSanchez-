const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  primerNombre: { type: String, required: true },
  segundoNombre: { type: String, required: false },
  primerApellido: { type: String, required: true },
  segundoApellido: { type: String, required: false },
  telefono: { type: String, required: false },
  identidad: { type: String, required: true },
  rtn: { type: String, required: false },
  alias: { type: String, unique: true, required: true },
  rol: { type: String, required: true },
  correo: { type: String, required: false },
  password: { type: String, required: true },
});

module.exports = mongoose.model('users', userSchema);
