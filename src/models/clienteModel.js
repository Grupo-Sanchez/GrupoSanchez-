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
  RTN: {
    type: String,
  },
  tel: {
    Type: String,
  },
  email: {
    type: String,
  },
});

module.exports = model('cliente', clienteSchema);
