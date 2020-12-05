const { Schema, model } = require('mongoose');

const departamentoSchema = new Schema({
  nombre: {
    type: String,
    required: 'se requiere nombre de Departamento',
  },
  descripcion: {
    type: String,
    required: 'nombre requerido',
  },
  imagen: {
    type: String,
  },
});

module.exports = model('departamento', departamentoSchema);
