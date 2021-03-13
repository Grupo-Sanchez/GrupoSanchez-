const proveedor = require('../models/proveedorModel');

//read entries normal
exports.read_proveedor = async (req, res) => {
  try {
    const ret = await proveedor.find();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.create_proveedor = async (req, res) => {
  const {
    company,
    nombre,
    apellidos,
    email,
    telefono,
    direction,
    ciudad,
    departamento,
    pais,
    comentario,
  } = req.body;
  try {
    const new_proveedor = new proveedor({
      company,
      nombre,
      apellidos,
      email,
      telefono,
      direction,
      ciudad,
      departamento,
      pais,
      comentario,
    });
    ret = await new_proveedor.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_proveedor = async (req, res) => {
  try {
    const ret = await proveedor.find();
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_proveedor = async (req, res) => {
  try {
    const ret = await proveedor.findByIdAndUpdate({ _id: req.params.proveedorId }, req.body, {
      new: true,
    });
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};
exports.delete_proveedor = async (req, res) => {
  try {
    const ret = await proveedor.deleteOne({ _id: req.params.proveedorId });
    res.json({ message: 'Deleted proveedor' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
