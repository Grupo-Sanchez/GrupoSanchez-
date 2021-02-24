const { Schema, model } = require('mongoose');
const facturaSchema = new Schema({
  nombreCliente: {
    type: String,
    required: 'se requiere la identidad',
  },
  identificacion: {
    type: String,
    required: 'identificacion requerido',
  },
  productosSeleccionado: {
    type: Array,
  },
  subtotal: {
    type: Number,
  },
  impuesto: {
    type: Number,
  },
  total: {
    type: Number,
  },
  invoiceNumber: {
    type: String,
  },
  fecha: {
    type: Date,
  },
});

module.exports = model('facturas', facturaSchema);
