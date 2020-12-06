const { Schema, model } = require('mongoose');
const DevolucionSchema = new Schema({
  nombreCliente: {
    type: String,
    required: 'se requiere la identidad',
  },
  identificacion: {
    type: String,
    required: 'identificacion requerido',
  },
  razonDevolucion: {
    type: String,
  },
  Estado: {
    type: String,
  },
  LugarDevolucion: {
    type: String,
  },
  productosDevueltos: {
    type: Array,
  },
});

module.exports = model('devoluciones', DevolucionSchema);
