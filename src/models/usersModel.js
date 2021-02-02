const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({
  identidad: {
    type: String,
    required: 'se requiere la identidad',
  },
  nombre: {
    type: String,
    required: 'el nombre es requerido',
  },
  segundo_nombre: {
    type: String,
  },
  primer_apellido: {
    type: String,
    required: 'el primer apellido es requerido',
  },
  segundo_apellido: {
    type: String,
  },
  rtn: {
    type: String,
  },

  telefono: {
    type: String,
  },
  correo: {
    type: String,
  },
  rol: {
    type: Array,
    required: 'se requiere un rol',
  },
});

module.exports = model('Users', UsersSchema);
