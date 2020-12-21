const { Router } = require('express');

const router = Router();

//importando metodos de clientesController
const bodega = require('../controllers/bodegaController');

router.route('/').get(bodega.read_bodega).post(bodega.create_bodega);

//se utiliza para capturar el id de un usuario
router
  .route('/:bodegaId')
  .get(bodega.read_bodega)
  .put(bodega.update_bodega)
  .delete(bodega.delete_bodega);

module.exports = router;
