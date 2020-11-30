const { Schema, model } = require('mongoose');

const clienteSchema = new Schema({
  cedula: {
    type: String,
    required: 'se requiere la identidad',
  },
  nombre: {
    type: String,
    required: 'nombre requerido',
  },
  segundo_nombre: {
    type: String,
  },
  primer_apellido: {
    type: String,
    required: 'primer apellido requerido',
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

module.exports = model('cliente', clienteSchema);
