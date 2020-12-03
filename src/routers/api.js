const express = require('express');
const administrador = require('./administrador.router');
/*const users = require('./usersRoutes');*/
const productos = require('./productosRoutes');

const api = express.Router();

//
api.use('/administrador', administrador);
api.use('/productos', productos);
module.exports = api;