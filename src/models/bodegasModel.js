const { text } = require('body-parser');
const { Schema, model } = require('mongoose');
const BodegaSchema = new Schema({
  numBodega: {
    type: String,
    required: 'se requiere nombre',
    unique: true,
  },
  descripcion: {
    type: String,
    required: 'area requerido',
  },
  encargado: {
    type: String,
    required: 'area requerido',
  },
});

module.exports = model('Bodegas', BodegaSchema);
