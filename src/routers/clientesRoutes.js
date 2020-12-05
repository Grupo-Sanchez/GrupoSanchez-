//crear enrutador
const { Router } = require('express');

const router = Router();

//importando metodos de clientesController
const cliente = require('../controllers/clientesController');

router.route('/').get(cliente.read_clientes).post(cliente.create_cliente);

//se utiliza para capturar el id de un usuario
router
  .route('/:clienteId')
  .get(cliente.read_cliente)
  .put(cliente.update_cliente)
  .delete(cliente.delete_cliente);

module.exports = router;
