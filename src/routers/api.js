const express = require('express');
const administrador = require('./administrador.router');
const users = require('./usersRoutes');

const api = express.Router();

//
api.use('/administrador', administrador);
api.use('/users', users);

module.exports = api;
