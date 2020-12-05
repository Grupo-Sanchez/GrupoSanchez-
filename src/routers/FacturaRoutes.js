const { Router } = require('express');

const router = Router();

//importando metodos de clientesController
const factura = require('../controllers/FacturaController');

router.route('/').get(factura.read_factura).post(factura.create_factura);

//se utiliza para capturar el id de un usuario
router
  .route('/:facturaId')
  .get(factura.read_factura)
  .put(factura.update_factura)
  .delete(factura.delete_factura);

module.exports = router;
