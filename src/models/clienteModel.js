const { Schema, model } = require('mongoose');

const clienteSchema = new Schema({
  cedula: {
    type: String,
    required: 'se requiere la identidad',
    unique: true,
    minLength: 13,
    maxLength: 13,
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
    type: Number,
  },
  tel: {
    type: Number,
  },
  email: {
    type: String,
  },
});

module.exports = model('cliente', clienteSchema);
