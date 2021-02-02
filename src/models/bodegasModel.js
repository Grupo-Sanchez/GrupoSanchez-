const { text } = require('body-parser');
const { Schema, model } = require('mongoose');
const ProductoSchema = new Schema({
/*     numBodega: "",
Description: "",
Encargado: "",
CantPasillos: "",',*/
    numBodega: {
        type: String,
        required: 'se requiere nombre',
    },
    descripcion: {
        type: String,
        required: 'area requerido',
    },
    encargado: {
        type: String,
    }, 
    cantPasillos: {
        type: String,
    }
});

module.exports = model('Bodegas', ProductoSchema);
