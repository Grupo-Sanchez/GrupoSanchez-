const express = require('express');
const administrador = require('./administrador.router');
/*const users = require('./usersRoutes');*/
const productos = require('./productosRoutes');
const devoluciones = require('./DevolucionRoutes');
const facturas = require('./FacturaRoutes');
const api = express.Router();

//
api.use('/administrador', administrador);
api.use('/productos', productos);
api.get('/productos', productos);
api.use('/devoluciones', devoluciones);
api.get('/devoluciones', devoluciones);
api.use('/facturas', facturas);
api.get('/facturas', facturas);
module.exports = api;
