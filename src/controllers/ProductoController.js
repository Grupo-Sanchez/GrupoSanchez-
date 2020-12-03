const producto = require('../models/ProductoModel');

//read entries normal
exports.read_producto = async (req, res) => {
    try {
        const ret = await producto.find();
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
exports.create_producto = async (req, res) => {
    const {
        /*nombre: '',
       area: '',
       codigo: ['123'],
       ubicacion: '',
       marca: '',
       precio: '', */
        nombre,
        area,
        codigos,
        proveedores,
        ubicacion,
        marca,
        precios,
    } = req.body;
    try {
        const new_producto = new producto({
            nombre,
            area,
            codigos,
            proveedores,
            ubicacion,
            marca,
            precios,
        });
        ret = await new_producto.save();
        res.json(ret);
    } catch (error) {
        res.send({ message: 'Bad request: ' + error });
    }
};

exports.read_producto = async (req, res) => {
    try {
        const ret = await producto.find();
        res.send(ret);
    } catch (error) {
        res.send({ message: 'Bad request: ' + error });
    }
};

exports.update_producto = async (req, res) => {
    try {
        const ret = await producto.findByIdAndUpdate({ _id: req.params.productoId }, req.query, {
            new: true,
        });
        res.json(ret);
    } catch (error) {
        res.send({ message: 'Bad request: ' + error });
    }
};

exports.delete_producto = async (req, res) => {
    try {
        const ret = await producto.deleteOne({ _id: req.params.productoId });
        res.json({ message: 'Deleted producto' });
    } catch (error) {
        res.send({ message: 'Bad Request: ' + error });
    }
};