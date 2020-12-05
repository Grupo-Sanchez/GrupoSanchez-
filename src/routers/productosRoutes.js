const { Router } = require('express');

const router = Router();

//importando metodos de clientesController
const producto = require('../controllers/ProductoController');

router.route('/').get(producto.read_producto).post(producto.create_producto);

//se utiliza para capturar el id de un usuario
router
  .route('/:productoId')
  .get(producto.read_producto)
  .put(producto.update_producto)
  .delete(producto.delete_producto);

module.exports = router;
