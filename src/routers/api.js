const express = require('express');
const administrador = require('./administrador.router');

const api = express.Router();

//
api.use('/administrador', administrador);

module.exports = api;
