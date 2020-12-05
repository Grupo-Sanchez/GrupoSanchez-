const express = require('express');
const administrador = require('./administrador.router');
const departamento = require('./departamentosRoute');

const api = express.Router();

//
api.use('/administrador', administrador);
api.use('/departamento', departamento);

module.exports = api;
