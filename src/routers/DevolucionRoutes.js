const { Router } = require('express');

const router = Router();

//importando metodos de clientesController
const devolucion = require('../controllers/DevolucionController');

router.route('/').get(devolucion.read_devolucion).post(devolucion.create_devolucion);

//se utiliza para capturar el id de un usuario
router
  .route('/:devolucionId')
  .get(devolucion.read_devolucion)
  .put(devolucion.update_devolucion)
  .delete(devolucion.delete_devolucion);

module.exports = router;
