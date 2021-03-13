const express = require('express');
const administrador = require('./administrador.router');
const users = require('./usersRoutes');
const clientes = require('./clientesRoutes');
const productos = require('./productosRoutes');
const devoluciones = require('./DevolucionRoutes');
const facturas = require('./FacturaRoutes');
const bodegas = require('./bodegaRoutes');
const proveedores = require('./proveedorRoutes');
const imagen = require('./file-upload-routes');
const marcas = require('./marca.router');
const login = require('./login');
const marcas2 = require('./marcaRoutes');
const api = express.Router();

//
api.use('/', login);
api.use('/marca', marcas2);
api.use('/marcas', marcas);
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
api.use('/SingleFile', imagen);
api.get('/getSingleFiles', imagen);
api.use('/bodegas', bodegas);
api.get('/bodegas', bodegas);
api.use('/proveedor', proveedores);
api.get('/proveedor', proveedores);

module.exports = api;
