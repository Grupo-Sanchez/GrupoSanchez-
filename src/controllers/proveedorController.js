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
exports.create_proveedor = async (req, res) => {
  const {
    company,
    nombre,
    apellidos,
    email,
    telefono,
    direccion,
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
      direccion,
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
