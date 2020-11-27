const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  nombre: {
    type: String,
    required: 'el nombre es requerido',
  },
  segundo_nombre: {
    type: String,
  },
  primer_apellido: {
    type: String,
    required: 'el apellido es requerido',
  },
  identidad: {
    Type: String,
  },

  segundo_apellido: {
    type: String,
  },
  rtn: {
    type: String,
  },

  telefono: {
    Type: String,
  },
  correo: {
    type: String,
  },
});

module.exports = model('user', userSchema);
