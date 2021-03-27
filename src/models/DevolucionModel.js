const { Schema, model } = require('mongoose');
const DevolucionSchema = new Schema({
  nombreCliente: {
    type: String,
  },
  identificacion: {
    type: String,
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
