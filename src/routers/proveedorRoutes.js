const { Router } = require('express');

const router = Router();

//importando metodos de proveedorController
const proveedor = require('../controllers/proveedorController');

router.route('/').get(proveedor.read_proveedor).post(proveedor.create_proveedor);

router
  .route('/:proveedorId')
  .get(proveedor.read_proveedor)
  .put(proveedor.update_proveedor)
  .delete(proveedor.delete_proveedor);

module.exports = router;
