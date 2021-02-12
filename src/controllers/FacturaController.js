const factura = require('../models/FacturaModel');

//read entries normal
exports.read_factura = async (req, res) => {
  try {
    const ret = await factura.find();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};
exports.create_factura = async (req, res) => {
  const {
    productosSeleccionado,
    subtotal,
    impuesto,
    total,
    nombreCliente,
    identificacion,
  } = req.body;
  try {
    const new_factura = new factura({
      productosSeleccionado,
      subtotal,
      impuesto,
      total,
      nombreCliente,
      identificacion,
    });
    ret = await new_factura.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_factura = async (req, res) => {
  try {
    const ret = await factura.find();
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_factura = async (req, res) => {
  try {
    const ret = await factura.findByIdAndUpdate({ _id: req.params.facturaId }, req.body, {
      new: true,
    });
    alert('simon');
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
    alert('catch');
  }
};

exports.delete_factura = async (req, res) => {
  try {
    const ret = await factura.deleteOne({ _id: req.params.facturaId });
    res.json({ message: 'Deleted factura' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
