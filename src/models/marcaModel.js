const { Schema, model } = require('mongoose');

const marcaSchema = new Schema({
  nombre: {
    type: String,
    required: 'se requiere la nombre de la marca',
  },
  descripcion: {
      type: String,
  }
});

module.exports = model('marcas', marcaSchema);
