const express = require('express');
const administrador = require('./administrador.router');
const users = require('./usersRoutes');
const clientes = require('./clientesRoutes');

const api = express.Router();

//
api.use('/administrador', administrador);
api.use('/users', users);
api.use('/clientes', clientes);

module.exports = api;
