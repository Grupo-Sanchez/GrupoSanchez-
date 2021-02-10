//var mongoose = require("mongoose"),
//Entry = mongoose.model("Entry");

const cliente = require('../models/clienteModel');

//read entries normal
exports.read_clientes = async (req, res) => {
  try {
    const ret = await cliente.find();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

//READ ENTRIES CON FILTRO REGISTERED == TRUE Y TAMBIEN CON SORT == TRUE

/*

exports.read_entries = async (req, res) => {
  try {
    var ret = await cliente.find();
    if (req.query.sort === "true") {
      ret = ret.sort((a, b) => b.score - a.score);
    }
    if (req.query.registered === "yes") {
      ret = ret.filter(a => a.registered === "yes");
    }
    res.json(ret);
  } catch (error) {
    res.send({ message: "Bad GET Request: " + error });
  }
};

*/

/*
exports.create_cliente = async (req, res) => {
  try {
    const new_cliente = new cliente(req.query);
    ret = await new_cliente.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};
*/
exports.create_cliente = async (req, res) => {
  const {
    cedula,
    nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    RTN,
    tel,
    email,
  } = req.body;
  try {
    const new_cliente = new cliente({
      cedula,
      nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
      RTN,
      tel,
      email,
    });
    ret = await new_cliente.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_cliente = async (req, res) => {
  try {
    const ret = await cliente.findById(req.params.clienteId);
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_cliente = async (req, res) => {
  try {
    const ret = await cliente.findByIdAndUpdate({ _id: req.params.clienteId }, req.body, {
      new: true,
    });
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.delete_cliente = async (req, res) => {
  try {
    const ret = await cliente.deleteOne({ _id: req.params.clienteId });
    res.json({ message: 'Deleted cliente' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
