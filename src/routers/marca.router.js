/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
const express = require('express');

const router = express.Router();

const multer = require('multer');

const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// eslint-disable-next-line object-shorthand
const upload = multer({ storage: storage });

const Marca = require('../models/marcaModel');

router.post('/create', upload.single('imagenMarca'), (req, res, next) => {
  console.log('=====>', req.file);
  Marca.find({ nombre: req.body.nombre })
    .exec()
    .then((marca) => {
      if (marca.length >= 1) {
        return res.status(409);
        // return res.status(409).json({
        //   message: 'La marca ya existe',
        // });
      } else {
        // eslint-disable-next-line consistent-return
        // eslint-disable-next-line no-shadow
        const marca = new Marca({
          _id: new mongoose.Types.ObjectId(),
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          imagenMarca: `http://localhost:3001/${req.file.path}`,
        });
        marca
          .save()
          .then((result) => {
            console.log(result);
            res.status(201);
            // .json({
            //   message: 'Marca created',
            //   createdMarca: {
            //     nombre: result.nombre,
            //     descripcion: result.descripcion,
            //     _id: result._id,
            //     request: {
            //       type: 'GET',
            //       url: 'http://localhost:3001/api/marcas',
            //     },
            //   },
            // });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          });
      }
    });
});

router.post('/simplecreate', upload.none(), (req, res, next) => {
  console.log(req.file);
  Marca.find({ nombre: req.body.nombre })
    .exec()
    .then((marca) => {
      if (marca.length >= 1) {
        return res.status(409).json({
          message: 'La marca ya existe',
        });
      } else {
        // eslint-disable-next-line consistent-return
        // eslint-disable-next-line no-shadow
        const marca = new Marca({
          _id: new mongoose.Types.ObjectId(),
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
        });
        marca
          .save()
          // .then((result) => {
          //   console.log(result);
          //   res.status(201).json({
          //     message: 'Marca created',
          //     createdMarca: {
          //       nombre: result.nombre,
          //       _id: result._id,
          //       request: {
          //         type: 'GET',
          //         url: 'http://localhost:3001/api/marcas',
          //       },
          //     },
          //   });
          // })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          });
      }
    });
});

// router.get('/', (req, res, next) => {
//   Marca.find()
//     .select('nombre descripcion imagenMarca')
//     .exec()
//     .then((values) => {
//       res.status(200).json({ success: true, values });
//     })
//     .catch((err) => {
//       res.status(500).json({ success: false, err });
//     });
// });

router.get('/', (req, res, next) => {
  Marca.find()
    .select('nombre descripcion imagenMarca')
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        marcas: docs.map((doc) => ({
          nombre: doc.nombre,
          descripcion: doc.descripcion,
          imagenMarca: doc.imagenMarca,
          _id: doc._id,
          request: {
            type: 'GET',
            url: `http://localhost:3001/api/marcas/${doc._id}`,
          },
        })),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get('/:marcaId', (req, res, next) => {
  const id = req.params.marcaId;
  Marca.findById(id)
    .select('nombre descripcion imagenMarca')
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        res.status(200).json({
          marca: doc,
          request: {
            type: 'GET',
            url: 'http://localhost:3001/api/marcas',
          },
        });
      } else {
        res.status(404).json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put('/update/:marcaId').post(upload.single('imagenMarca'), (req, res) => {
  const id = req.params.marcaId;
  Marca.findByIdAndUpdate(
    id,
    {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      imagenMarca: `http://localhost:3001/${req.file.path}`,
    },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    },
  );
});

// router.put('/update/:id', (req, res, next) => {
//   const { id } = req.params;
//   const { user } = req.body;
//   const where = { _id: id };
//   Users.findOne(where)
//     .then((value) => {
//       if (value !== null) {
//         if (!user.password) {
//           Users.updateOne(where, { $set: user })
//             .then((value) => {
//               res.status(200).json({ success: true, info: value });
//             })
//             .catch(next);
//         } else {
//           hash(user.password, SALT)
//             .then((hashedPass) => {
//               Users.updateOne(where, { $set: { ...user, password: hashedPass } })
//                 .then((value) => {
//                   res.status(200).json({ success: true, ...value.toObject() });
//                 })
//                 .catch(next);
//             })
//             .catch(next);
//         }
//       } else {
//         const error = new Error(`Was unable to update a user with the id: ${id}`);
//         next(error);
//       }
//     })
//     .catch(next);
// });

router.delete('/:marcaId', (req, res, next) => {
  const id = req.params.marcaId;
  Marca.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'marca deleted',
        request: {
          type: 'POST',
          url: 'http://localhost:3001/api/marcas',
          body: { nombre: 'String', descripcion: 'String' },
        },
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
