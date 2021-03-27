const { Schema, model } = require('mongoose');

const UsersSchema = new Schema({
  identidad: {
    type: String,
    required: 'se requiere la identidad',
  },
  primerNombre: {
    type: String,
    required: 'el nombre es requerido',
  },
  segundoNombre: {
    type: String,
  },
  primerApellido: {
    type: String,
    required: 'el primer apellido es requerido',
  },
  segundoApellido: {
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
