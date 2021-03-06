const bodega = require('../models/bodegasModel');
const product = require('../models/ProductoModel');

// exports.read_bodega = async (req, res) => {
//   try {
//     const ret = await bodega.find();
//     res.json(ret);
//   } catch (error) {
//     res.send({ message: 'Bad request: ' + error });
//   }
// };

exports.create_bodega = async (req, res) => {
  const { numBodega, descripcion, encargado, cantPasillos, CantProductos } = req.body;
  try {
    const new_bodega = new bodega({
      numBodega,
      descripcion,
      encargado,
    });
    ret = await new_bodega.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_bodega = async (req, res) => {
  try {
    const ret = await bodega.find();
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.filter_bodegas = async (req, res) => {
  try {
    const id = req.params.name;
    const ret = await product.find({ bodega: { $elemMatch: { value: id } } });
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_bodega = async (req, res) => {
  try {
    const ret = await bodega.findByIdAndUpdate({ _id: req.params.bodegaId }, req.body, {
      new: true,
    });
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.delete_bodega = async (req, res) => {
  try {
    const ret = await bodega.deleteOne({ _id: req.params.bodegaId });
    res.json({ message: 'Deleted bodega' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
