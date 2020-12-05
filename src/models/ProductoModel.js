const { text } = require('body-parser');
const { Schema, model } = require('mongoose');
const ProductoSchema = new Schema({/*  nombre: '',
area: '',
codigo: ['123'],
ubicacion: '',
marca: '',
precio: '',*/
    nombre: {
        type: String,
        required: 'se requiere la identidad',
    },
    area: {
        type: String,
        required: 'nombre requerido',
    },
    codigos: {
        type: Array,
    }, proveedores: {
        type: Array,
    }, ubicacion: {
        type: String,
    }, marca: {
        type: String,
    }, precios: {
        type: Array,
    }, cantidad: {
        type: Number
    }, descripcion_corta: {
        type: String
    }, descripcion_larga: {
        type : String
    }
});

module.exports = model('producto', ProductoSchema);