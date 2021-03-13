const { Schema, model } = require('mongoose');

const proveedorSchema = new Schema({
  company: {
    type: String,
    required: 'se requiere la compañia',
  },
  nombre: {
    type: String,
    required: 'Se requiere el nombre',
  },
  apellidos: {
    type: String,
    required: 'Se requiere el apellido',
  },
  email: {
    type: String,
  },
  telefono: {
    type: String,
  },
  direction: {
    type: String,
  },
  ciudad: {
    type: String,
  },
  departamento: {
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
