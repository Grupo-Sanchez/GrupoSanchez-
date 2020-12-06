const devolucion = require('../models/DevolucionModel');

//read entries normal
exports.read_devolucion = async (req, res) => {
  try {
    const ret = await devolucion.find();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};
exports.create_devolucion = async (req, res) => {
  const {
    nombreCliente,
    identificacion,
    razonDevolucion,
    Estado,
    LugarDevolucion,
    productosDevueltos,
  } = req.body;
  try {
    const new_devolucion = new devolucion({
      nombreCliente,
      identificacion,
      razonDevolucion,
      Estado,
      LugarDevolucion,
      productosDevueltos,
    });
    ret = await new_devolucion.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_devolucion = async (req, res) => {
  try {
    const ret = await devolucion.find();
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_devolucion = async (req, res) => {
  try {
    const ret = await devolucion.findByIdAndUpdate({ _id: req.params.devolucionId }, req.query, {
      new: true,
    });
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.delete_devolucion = async (req, res) => {
  try {
    const ret = await devolucion.deleteOne({ _id: req.params.devolucionId });
    res.json({ message: 'Deleted devolucion' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
