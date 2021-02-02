const { Schema, model } = require('mongoose');

const proveedorSchema = new Schema({
  company: {
    type: String,
    required: 'se requiere la compañia',
  },
  agencia: {
    type: String,
  },
  nombre: {
    type: String,
    required: 'Se requiere el nombre',
  },
  apellidos: {
    type: String,
    required: 'Se requiere el apellido',
  },
  genero: {
    type: String,
  },
  email: {
    type: String,
  },
  telefono: {
    type: String,
  },
  direccion1: {
    type: String,
  },
  direccion2: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  departamento: {
    type: String,
  },
  codigoPostal: {
    type: String,
  },
  pais: {
    type: String,
  },
  comentario: {
    type: String,
  },
});

module.exports = model('proveedores', proveedorSchema);
