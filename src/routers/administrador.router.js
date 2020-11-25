// Creamos instancia para express
const express = require('express');

// Trae el modelo definido para el objeto
const modeloAdministrador = require('../models/administrador.model');

// Este es mi router
const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  modeloAdministrador
    .find({})
    .then((values) => {
      res.status(200).json({ success: true, values });
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

adminRouter.post('/', (req, res) => {
  const { titulo, terminado } = req.body;
  const fecha = new Date().getTime();
  modeloAdministrador
    .create({ titulo, terminado, fecha })
    .then((value) => {
      res.status(200).json({ success: true, value });
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

adminRouter.put('/', (req, res) => {
  const { titulo, terminado, id } = req.body;
  modeloAdministrador
    .update({ _id: id }, { $set: { titulo, terminado } })
    .then((value) => {
      res.status(200).json({ success: true, value });
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

adminRouter.delete('/', (req, res) => {
  const { id } = req.body;
  modeloAdministrador
    .deleteOne({ _id: id })
    .then((value) => {
      res.status(200).json({ success: true, value });
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

// Exportamos el router
module.exports = adminRouter;
