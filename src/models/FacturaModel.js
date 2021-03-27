const { Schema, model } = require('mongoose');
const facturaSchema = new Schema({
  nombreCliente: {
    type: String,
    required: 'se requiere la identidad',
  },
  identificacion: {
    type: String,
    required: 'identificacion requerido',
  } /*
  razonfactura: {
    type: String,
  },
  Estado: {
    type: String,
  },
  Lugarfactura: {
    type: String,
  },*/,

  productosSeleccionado: {
    type: Array,
  },
  subtotal: {
    type: Number,
  },
  impuesto: {
    type: Number,
  },
  invoiceNumber: {
    type: String,
  },
  total: {
    type: Number,
  },
  invoiceNumber: {
    type: String,
  },
});

module.exports = model('facturas', facturaSchema);
