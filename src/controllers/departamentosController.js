//var mongoose = require("mongoose"),
//Entry = mongoose.model("Entry");

const departamento = require('../models/departamentoModel');

//read entries normal
exports.read_departamento = async (req, res) => {
  try {
    const ret = await departamento.find();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

//READ ENTRIES CON FILTRO REGISTERED == TRUE Y TAMBIEN CON SORT == TRUE

/*

exports.read_entries = async (req, res) => {
  try {
    var ret = await departamento.find();
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
    const new_cliente = new departamento(req.query);
    ret = await new_cliente.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};
*/
exports.create_departamento = async (req, res) => {
  const { nombre, descripcion, imagen } = req.body;
  try {
    const new_departamento = new departamento({
      nombre,
      descripcion,
      imagen,
    });
    ret = await new_departamento.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_departamento = async (req, res) => {
  try {
    const ret = await departamento.findById(req.params.departamentoId);
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_departamento = async (req, res) => {
  try {
    const ret = await departamento.findByIdAndUpdate(
      { _id: req.params.departamentoId },
      req.query,
      {
        new: true,
      },
    );
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.delete_departamento = async (req, res) => {
  try {
    const ret = await departamento.deleteOne({ _id: req.params.departamentoId });
    res.json({ message: 'Deleted departamento' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
