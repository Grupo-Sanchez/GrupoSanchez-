const mongoose = require('mongoose');

const marcaSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: {
    type: String,
    unique: true,
    required: true,
  },
  descripcion: {
    type: String,
  },
  imagenDepartamento: { type: String },
});

module.exports = mongoose.model('departamentos', marcaSchema);
