const express = require('express');
const administrador = require('./administrador.router');
const users = require('./usersRoutes');
const clientes = require('./clientesRoutes');
const productos = require('./productosRoutes');
const devoluciones = require('./DevolucionRoutes');
const facturas = require('./FacturaRoutes');
const bodegas = require('./bodegaRoutes');

const api = express.Router();

//
api.use('/administrador', administrador);
api.use('/productos', productos);
api.get('/productos', productos);
api.use('/devoluciones', devoluciones);
api.get('/devoluciones', devoluciones);
api.use('/facturas', facturas);
api.get('/facturas', facturas);
api.use('/users', users);
api.get('/users', users);
api.use('/clientes', clientes);
api.get('/clientes', clientes);
api.use('/bodegas',bodegas);
api.get('/bodegas',bodegas);
module.exports = api;
