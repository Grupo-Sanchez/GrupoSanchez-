/* eslint-disable no-else-return */
/* eslint-disable no-shadow */
const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const checkAuth = require('../middleware/check-auth');

const User = require('../models/loginModel');

router.post('/signup', (req, res, next) => {
  User.find({ alias: req.body.alias })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: 'Este usuario ya existe.',
        });
      } else {
        // eslint-disable-next-line consistent-return
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              alias: req.body.alias,
              primerNombre: req.body.primerNombre,
              segundoNombre: req.body.segundoNombre,
              primerApellido: req.body.primerApellido,
              segundoApellido: req.body.segundoApellido,
              identidad: req.body.identidad,
              telefono: req.body.telefono,
              rtn: req.body.rtn,
              correo: req.body.correo,
              rol: req.body.rol,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: 'Usuario creado.',
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                  message: 'Fallo al guardar dog',
                });
              });
          }
        });
      }
    });
});

router.post('/login', (req, res, next) => {
  User.find({ alias: req.body.alias })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'No encontro el alias',
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Mala pass dog',
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              alias: user[0].alias,
              userId: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: 120,
            },
          );
          console.log('Verificando: ', user);
          const rutaTemporal = user[0].rol;
          return res.status(200).json({
            ruta: rutaTemporal,
            message: 'Auth successful',
            token: token,
          });
        }
        res.status(401).json({
          message: 'Auth failed',
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete('/:userId', checkAuth, (req, res, next) => {
  console.log('#######Deberia verificar######');
  User.remove({ _id: req.params.userId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'User deleted',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
