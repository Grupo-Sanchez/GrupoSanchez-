// ODM de la base de datos (mapea documentos de la base de datos a un objeto)
const mongoose = require('mongoose');

// Estos son schemas del objeto administrdor
const administradorSchema = new mongoose.Schema({
  titulo: String,
  terminado: Boolean,
  fecha: Date,
});

// modelo: Casita
// Esquema: Plano
// mongoose.model 1er parametro= nombre de la coleccion, 2do parametro= exportamos el modelo,
module.exports = mongoose.model('mujeres', administradorSchema);
