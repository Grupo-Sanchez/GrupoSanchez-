const marca = require('../models/marcaModel');

//read entries normal
exports.read_marca = async (req, res) => {
  try {
    const ret = await marca.find();
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
exports.create_marca = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const new_marca = new marca({
      nombre,
      descripcion,
    });
    ret = await new_marca.save();
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.read_marca = async (req, res) => {
  try {
    const ret = await marca.find();
    res.send(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};

exports.update_marca = async (req, res) => {
  try {
    const ret = await marca.findByIdAndUpdate({ _id: req.params.marcaId }, req.body, {
      new: true,
    });
    res.json(ret);
  } catch (error) {
    res.send({ message: 'Bad request: ' + error });
  }
};
exports.delete_marca = async (req, res) => {
  try {
    const ret = await marca.deleteOne({ _id: req.params.marcaId });
    res.json({ message: 'Deleted marca' });
  } catch (error) {
    res.send({ message: 'Bad Request: ' + error });
  }
};
