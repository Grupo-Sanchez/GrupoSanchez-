
const users = require('../models/usersModel');

exports.read_users = async (req, res) => {
  try {
    const ret = await users.find();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.create_users = async (req, res) => {
  const {
    identidad,
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    rtn,
    telefono,
    correo,
    rol,
  } = req.body;
  try {
    const new_users = new users({
      identidad,
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      rtn,
      telefono,
      correo,
      rol,
    });
    ret = await new_users.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_users = async (req, res) => {
  try {
    const ret = await users.find();
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_users = async (req, res) => {
  try {
    const ret = await users.findByIdAndUpdate({ _id: req.params.usersId }, req.body, {
      new: true,
    });
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.delete_users = async (req, res) => {
  try {
    const ret = await users.deleteOne({ _id: req.params.usersId });
    res.json({ message: 'Deleted user' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
